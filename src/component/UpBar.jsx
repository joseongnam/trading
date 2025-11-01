export default function UpBar() {
  return (
    <nav className="flex justify-between">
      <div>
        <h1 className="text-white font-bold text-2xl m-3">Home</h1>
      </div>
      <div className="m-3 border-2 border-gray-200 rounded-[50%] text-gray-200 px-2 py-1 lg:w-12 lg:rounded-[50%] lg:text-center lg:relative  cursor-pointer">
        <span class="fas fa-user lg:absolute top-3 lg:left-4 scale-110"></span>
      </div>
    </nav>
  );
}
