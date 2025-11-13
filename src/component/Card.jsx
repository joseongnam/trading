export default function Card() {
  return (
    <div className="flex rounded p-2 h-30 hover:bg-[#7543fd] active:bg-[#7543fd] hover:shadow">
      <div className="pr-4 mt-2">
        <div className="border-2 border-white h-8 w-8 relative rounded-[50%]">
          <span className="fas fa-user absolute top-[5px] left-[7px] scale-110"></span>
        </div>
      </div>
      <div>
        <div>Lorem, ipsum.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </div>
  );
}
