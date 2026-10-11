import Image from "next/image";

export function FloorPlanCard({
  name,
  beds,
  baths,
  size,
  from,
  body,
  image,
  alt,
}: {
  name: string;
  beds: string;
  baths: string;
  size: string;
  from: string;
  body: string;
  image?: string;
  alt?: string;
}) {
  return (
    <article className="card overflow-hidden">
      {image ? (
        <Image
          src={image}
          alt={alt ?? name}
          width={1200}
          height={800}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="h-52 w-full object-cover"
        />
      ) : (
        <div className="flex h-52 items-end bg-brand-primary p-5">
          <p className="font-display text-3xl text-white">{from}</p>
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl text-brand-deep">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-brand-accent-ink">{from}</p>
        <p className="mt-2 text-sm font-semibold text-text-muted">
          Beds: {beds} <span aria-hidden="true">|</span> Baths: {baths} <span aria-hidden="true">|</span> Size:{" "}
          {size}
        </p>
        <p className="mt-3">{body}</p>
      </div>
    </article>
  );
}
