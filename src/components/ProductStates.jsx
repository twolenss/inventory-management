export function LoadingState({ message = "Loading products..." }) {
  return (
    <section className="mx-auto max-w-2xl rounded-lg bg-gray-50 p-8 text-center shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div>
        <p className="text-lg font-medium text-gray-600">{message}</p>
      </div>
    </section>
  );
}

export function ErrorState({
  title = "Unable to load products.",
  message = "Something went wrong while retrieving the inventory.",
}) {
  return (
    <section className="mx-auto max-w-2xl rounded-lg bg-red-50 p-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <h2 className="mb-2 text-2xl font-bold text-red-600">{title}</h2>
      <p className="text-red-700">{message}</p>
    </section>
  );
}

export function EmptyState({
  title = "No products found",
  message = "Your inventory is currently empty.",
}) {
  return (
    <section className="mx-auto max-w-2xl rounded-lg bg-gray-50 p-8 text-center shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <h2 className="mb-2 text-2xl font-bold text-gray-700">{title}</h2>
      <p className="text-gray-500">{message}</p>
    </section>
  );
}

export function SuccessState({
  title = "Product Added!",
  message = "Your product was successfully added.",
}) {
  return (
    <section className="mx-auto max-w-2xl rounded-lg bg-green-50 p-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <h2 className="mb-2 text-2xl font-bold text-green-600">{title}</h2>
      <p className="text-green-700">{message}</p>
    </section>
  );
}
