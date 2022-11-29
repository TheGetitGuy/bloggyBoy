import fs from "node:fs";
import grayMatter from 'gray-matter';
import path from "path"
interface mdInter{
postId:string
}
function getMarkDownInfo({ postId }:mdInter):grayMatter.GrayMatterFile<string> | false{
  const files = fs.readdirSync(path.resolve('markdown'))
  // console.log(files)
  if (files.find((elem)=>{
    // console.log(elem)
    // console.log(`page${postId}.md`)
    return(elem === `page${postId}.md`)
    })){
  const content = (fs.readFileSync(path.resolve('markdown') + '/page' + postId + '.md')).toString()
  const parseContent = grayMatter(content)
  return parseContent
  }
  return false
}
export default getMarkDownInfo
