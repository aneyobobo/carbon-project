
export const okay = () =>{
const datas = [
    {
        id: 1,
        name: "Dashboard",
        type: "table",
        date:"2023",
        status: "active",
    },
    {
        id: 2,
        name: "Dashboard",
        type: "table",
        date:"2023",
        status: "active",
    },
    {
        id: 3,
        name: "Dashboard",
        type: "table",
        date:"2023",
        status: "active",
    },
    {
        id: 4,
        name: "Dashboard",
        type: "table",
        date:"2023",
        status: "active",
    }
]



return (
<div>
  <table>
    <thead>
      <tr>
        <th className="">Sn.</th>
        <th className="">Name</th>
        <th className="">Type</th>
        <th className="">Date</th>
        <th className="">Status</th>
      </tr>
    </thead>
    {
        // datas.map((datas, i) =>(
        //     // <Tab {...datas} key={i} />
        // ))
    }

  </table>
  {/* <TableData /> */}
</div>
)
}