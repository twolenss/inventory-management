export function LoadingState({ message = "Loading products..." }) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-surface p-8 text-center shadow-sm ring-1 ring-border">
      <div>
        <p className="text-lg font-medium text-secondary-text">{message}</p>
      </div>
    </section>
  );
}

export function ErrorState({
  title = "Unable to load products.",
  message = "Something went wrong while retrieving the inventory.",
}) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-surface p-8 shadow-sm ring-1 ring-border">
      <h2 className="mb-2 text-2xl font-bold text-primary-text">{title}</h2>
      <p className="text-secondary-text">{message}</p>
    </section>
  );
}

export function EmptyState({
  title = "No products found",
  message = "Your inventory is currently empty.",
}) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-surface p-8 text-center shadow-sm ring-1 ring-border">
      <h2 className="mb-2 text-2xl font-bold text-primary-text">{title}</h2>
      <p className="text-secondary-text">{message}</p>
    </section>
  );
}

export function SuccessState({
  title = "Product Added!",
  message = "Your product was successfully added.",
}) {
  return (
    <section className="mx-auto mb-6 max-w-2xl rounded-2xl bg-[#fffaf0] p-6 shadow-sm ring-1 ring-[#f4d77a]">
      <h2 className="mb-1 text-xl font-bold text-primary-text">{title}</h2>
      <p className="text-secondary-text">{message}</p>
    </section>
  );
}