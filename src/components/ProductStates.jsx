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
export function SuccessState({  title="Product Added!",
      message="Your product was successfully added." }) {
  return (
    <section className="emptyState">
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
