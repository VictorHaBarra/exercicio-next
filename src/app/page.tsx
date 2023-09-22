
export default function Home() { const lista =[ {nome: "Victor", idade:19, aluno:true}, {nome: "Livia", idade:19, aluno:true} ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul> { lista.map( (item) =>( <li key={item.nome}> {item.nome} - {item.idade} - {item.aluno} </li> ) ) } </ul>
      <h1>Next.js</h1>
      
    </main>
  )
  }
