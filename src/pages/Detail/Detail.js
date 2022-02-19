import DetailCard from "../../components/DetailCard/DetailCard"
import "./Detail.css"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTreeById } from "../../services/api"

const Detail = () => {
  const { treeId } = useParams()

  const [tree, setTree] = useState({})

  const onGetTreeById = (id) => {
    getTreeById(id).then((res) => {
      setTree(res)
    })
  }

  useEffect(() => {
    onGetTreeById(treeId)
  }, [])

  return (
    <div className="Detail">
      <nav className="sticky-top navbar navbar-expand-md navbar-light bg-success">
        <Link to={`/Home`}>
          <i className="fa-solid fa-angles-left fa-2xl"></i>
        </Link>
        <h1 className="title">{tree.tree_name}</h1>
      </nav>
      <div>{tree && <DetailCard treeList={tree} />}</div>
    </div>
  )
}

export default Detail
