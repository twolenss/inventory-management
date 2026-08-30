export function LoadingState({ message = "Loading products..." }) {
  return (
    <section className="loadingState">
      <div>
        <p>{message}</p>
      </div>
    </section>
  );
}

export function ErrorState({ title = "Unable to load products.", message = "Something went wrong while retrieving the inventory." }) {
  return (
    <section className="emptyState">
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
export function EmptyState({ title = "No products found", message = "Your inventory is currently empty." }) {
  return (
    <section className="emptyState">
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
export function SuccessState({ title="Product Added!", message="Your product was successfully added." }) {
  return (
    <section className="mx-auto max-w-2xl rounded-lg bg-green-50 p-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <h2 className="mb-2 text-2xl font-bold text-green-600">{title}</h2>
      <p className="text-green-700">{message}</p>
    </section>
  );
}