'use client';
export default function Error({ error, reset }) {
  return (
    <div className="text-center py-10 text-red-500">
      <h2>Something went wrong in Dashboard!</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="hover:text-2xl">Try Again</button>
    </div>
  );
}
