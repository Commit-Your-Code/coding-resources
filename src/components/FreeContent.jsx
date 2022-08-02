import FreeCourseList from "./FreeCourseList.jsx"

const FreeContent = () => {
  return (
    <div className=" flex flex-col justify-center p-8">
      {FreeCourseList.courses.map(({ id, name, url }) => (
        <div className="text-2xl flex flex-col justify-center p-4" key={id}>
          <div className="flex justify-center">{name}</div>
          <div className="flex justify-center">{url}</div>
        </div>
      ))}
    </div>
  )
}

export default FreeContent
