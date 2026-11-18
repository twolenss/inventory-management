import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { Eye, EyeOff, LockKeyhole, Mail, Package } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const data = await login(form.email, form.password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/", { replace: true });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/15 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-lg sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
            <Package className="h-7 w-7 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-primary-text">Welcome back</h1>
          <p className="mt-2 text-sm text-secondary-text">Sign in to manage your inventory.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-primary-text">Email address</span>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary-text" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-10 py-3 text-primary-text outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-primary-text">Password</span>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary-text" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-border bg-background px-10 py-3 pr-12 text-primary-text outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-text hover:text-primary-text"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-secondary-text">
              <input type="checkbox" checked={form.remember} onChange={(event) => setForm({ ...form, remember: event.target.checked })} className="h-4 w-4 accent-accent" />
              Remember me
            </label>
            {/* <Link to="/forgot-password" className="font-medium text-primary-text hover:text-accent-warm">
              Forgot password?
            </Link> */}
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-accent px-4 py-3 font-semibold text-primary-text shadow-sm transition hover:bg-accent-warm hover:text-white focus:outline-none focus:ring-4 focus:ring-accent/25"
          >
            {isSubmitting ? "Signing in..." : "Sign in" }
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
