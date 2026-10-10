const MAP_SRC =
  "https://maps.google.com/maps?q=376%20Derry%20Road%20West%2C%20Mississauga%2C%20ON%20L5W%201N6&z=15&output=embed";

export function LocationMap() {
  return (
    <div className="mt-8">
      <div className="h-[420px] overflow-hidden border border-border bg-surface-alt">
        <iframe
          title="Map of Derry Lane Towns at 376 Derry Road West, Mississauga"
          src={MAP_SRC}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 text-sm">
        <a
          className="prose-link"
          href="https://www.google.com/maps/search/?api=1&query=376+Derry+Road+West+Mississauga+ON+L5W+1N6"
        >
          Open 376 Derry Road West in Google Maps
        </a>
      </p>
    </div>
  );
}
