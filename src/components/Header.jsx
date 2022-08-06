import style from "../assets/css/Header.module.css"
import HeaderImage from "../assets/images/header_learning.png"
const Header = () => {
  return (
    <div>
      <div
        className={`${style.headerContainer} mx-auto flex flex-row justify-center items-center h-screen w-screen`}
      >
        <div className="flex flex-row lg:ml-40">
          <div className={`${style.imageContainer} w-full ml-80`}>
            <img
              src={HeaderImage}
              className={`h-9/12 drop-shadow-2xl border border-gray-100`}
            />
          </div>
          <div className="ml-24 font-sans sm:text-2xl lg:text-6xl text-white drop-shadow-lg flex justify-end">
            Community Trusted Resources. For you.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
