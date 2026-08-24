function LoadingState ({message = "Loading products..."}) {

    return (
        <section className="loadingState">
            <div>
                <p>{message}</p>
            </div>
        </section>
    );
}
export default LoadingState;