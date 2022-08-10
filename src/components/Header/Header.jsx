import style from "./Header.module.css"
import HeaderImage from "./header_learning.png"
const Header = () => {
  return (
    <div>
      <div
        className={`${style.headerContainer} mx-auto flex flex-row justify-center items-center h-screen w-screen`}
      >
        <div className="flex flex-row items-center lg:ml-40 ">
          <div className={`${style.imageContainer} ml-8 md:ml-30 `}>
            <img
              src={HeaderImage}
              className={`h-full w-60 drop-shadow-2xl border border-gray-100 rounded-lg `}
            />
          </div>
          <div className="ml-12 md:ml-24 font-sans text-2xl lg:text-6xl text-white drop-shadow-lg flex justify-end">
            Community Trusted Resources. <br /> For you.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
