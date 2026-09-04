"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { getNeighborhoods, getProperties } from "@/lib/content";
import Card from "@/components/ui/Card";

export default function SearchExperience() {
  const copy = siteConfig.searchPage;
  const neighborhoods = getNeighborhoods();
  const all = getProperties();

  const [neighborhood, setNeighborhood] = useState("all");
  const [status, setStatus] = useState("all");
  const [priceIndex, setPriceIndex] = useState(0);
  const [minBeds, setMinBeds] = useState(0);
  const [sort, setSort] = useState("newest");

  const results = useMemo(() => {
    const range = copy.priceRanges[priceIndex];
    const filtered = all.filter((item) => {
      if (neighborhood !== "all" && item.neighborhood !== neighborhood) return false;
      if (status !== "all" && item.status !== status) return false;
      if (item.priceValue < range.min || item.priceValue >= range.max) return false;
      if (minBeds && item.beds < minBeds) return false;
      return true;
    });

    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.priceValue - b.priceValue);
    if (sort === "price-desc") sorted.sort((a, b) => b.priceValue - a.priceValue);
    return sorted;
  }, [all, neighborhood, status, priceIndex, minBeds, sort, copy.priceRanges]);

  const chip =
    "rounded-full border px-[1.6rem] py-[0.9rem] text-[1.4rem] font-medium transition md:text-[1.6rem]";
  const active = "border-ink bg-ink text-white";
  const idle = "border-ink/15 text-ink hover:border-ink";

  function clearFilters() {
    setNeighborhood("all");
    setStatus("all");
    setPriceIndex(0);
    setMinBeds(0);
    setSort("newest");
  }

  return (
    <section className="pb-[8rem] md:pb-[15rem]">
      <div className="site-container">
        <div className="border-y border-ink/10 py-[3rem] md:py-[4rem]">
          <p className="caption mb-[2rem]">{copy.filtersLabel}</p>
          <div className="flex flex-col gap-[2.4rem]">
            <FilterRow label={copy.neighborhoodsLabel}>
              <button
                type="button"
                className={`${chip} ${neighborhood === "all" ? active : idle}`}
                onClick={() => setNeighborhood("all")}
              >
                {copy.allNeighborhoodsLabel}
              </button>
              {neighborhoods.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`${chip} ${neighborhood === name ? active : idle}`}
                  onClick={() => setNeighborhood(name)}
                >
                  {name}
                </button>
              ))}
            </FilterRow>
            <FilterRow label={copy.statusLabel}>
              {[
                { value: "all", label: copy.allNeighborhoodsLabel },
                { value: copy.forSaleValue ?? copy.forSaleLabel, label: copy.forSaleLabel },
                { value: copy.forRentValue ?? copy.forRentLabel, label: copy.forRentLabel },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className={`${chip} ${status === item.value ? active : idle}`}
                  onClick={() => setStatus(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </FilterRow>
            <FilterRow label={copy.priceLabel}>
              {copy.priceRanges.map((range, index) => (
                <button
                  key={range.label}
                  type="button"
                  className={`${chip} ${priceIndex === index ? active : idle}`}
                  onClick={() => setPriceIndex(index)}
                >
                  {range.label}
                </button>
              ))}
            </FilterRow>
            <FilterRow label={copy.bedsBathsLabel}>
              {[0, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`${chip} ${minBeds === value ? active : idle}`}
                  onClick={() => setMinBeds(value)}
                >
                  {value === 0 ? copy.anyBedsLabel : `${value}+`}
                </button>
              ))}
            </FilterRow>
          </div>
        </div>

        <div className="mt-[3rem] flex flex-wrap items-center justify-between gap-[1.6rem] md:mt-[5rem]">
          <p className="text-[1.6rem] font-medium md:text-[2rem]">
            {results.length.toLocaleString(siteConfig.locale.lang)} {copy.resultsSuffix}
          </p>
          <label className="flex items-center gap-[1rem] text-[1.6rem] font-medium md:text-[2rem]">
            <span>{copy.sortLabel}</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="bg-transparent outline-none"
            >
              <option value="newest">{copy.sortNewest}</option>
              <option value="price-asc">{copy.sortPriceAsc}</option>
              <option value="price-desc">{copy.sortPriceDesc}</option>
            </select>
          </label>
        </div>

        {results.length === 0 ? (
          <div className="mt-[6rem] max-w-[54rem]">
            <p className="lead-md">{copy.emptyLabel}</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-[2rem] text-[1.6rem] font-medium underline"
            >
              {copy.clearLabel}
            </button>
          </div>
        ) : (
          <div className="mt-[4rem] grid gap-[4rem] md:mt-[6rem] md:grid-cols-3 md:gap-x-[3rem] md:gap-y-[8rem]">
            {results.map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterRow({ label, children }) {
  return (
    <div className="grid gap-[1.2rem] md:grid-cols-[18rem_1fr] md:items-start">
      <p className="text-[1.6rem] font-medium text-ink/50 md:text-[1.8rem]">{label}</p>
      <div className="flex flex-wrap gap-[1rem]">{children}</div>
    </div>
  );
}
