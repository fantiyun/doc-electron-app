const information = document.getElementById('info')
information.innerText = `本应用中使用
Chrome (v${versions.chrome()}),
Nodejs (v${versions.node()}),
Electron (v${versions.electron()}),
学员(name: ${versions.author})正在学习 Electron
`

const func = async () => {
  const response = await versions.ping()
  //   alert(response)
  console.log(response)
}
func()
