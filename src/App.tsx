export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-red-500">セリフレコーダー</h1>
      <p className="mt-2 text-sm text-gray-600">
        成長が見える録音アプリです。
      </p>

      <div className="mt-6 rounded-xl border bg-white p-4 shadow">
        <button className="rounded-lg px-4 py-2 text-white bg-black hover:opacity-90">
          録音を始める
        </button>
      </div>
    </div>
  );
}
