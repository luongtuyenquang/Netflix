interface Props {
  header: HTMLElement
  pathName: string
  pathNameUrl: string
  color?: string
}

const changeColorHeader = ({ header, pathName, pathNameUrl, color = 'black' }: Props) => {
  if (pathName === pathNameUrl) {
    header.style.backgroundColor = color
  }
}

export default changeColorHeader
