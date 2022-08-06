import style from "../assets/Header.module.css"

const Header = () => {
  return (
    <div>
      <div
        className={`${style.headerContainer} text-3xl flex justify-center h-screen`}
      >
        <div className="font-sans text-6xl text-white drop-shadow-lg flex justify-end">
          Community Trusted Resources. For you.
        </div>
      </div>
    </div>
  )
}

export default Header
