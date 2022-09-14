import HeaderScrollTS from '../interface/headerScrollTS'

const headerScroll = ({ header, pathName, pathNameUrl, color }: HeaderScrollTS) => {
  if (pathName === pathNameUrl) {
    header.style.backgroundColor = color
  }
}

export default headerScroll
