import React, { useMemo } from 'react'

const gibson = "nodality,nodal point,jeans,Kowloon,Shibuya,digital,hacker,post-,futurity,papier-mache,rifle,otaku,pistol,modem,uplink,ablative,semiotics,free-market,narrative,pre-,meta-,marketing,8-bit,cyber-,electro-,meta-,cardboard,bicycle,range-rover,city,network,realism,euro-pop,j-pop,Chiba,Tokyo,San Francisco,franchise,sprawl,urban,decay,monofilament,katana,tanto,math-,bomb,grenade,tiger-team,3D-printed,plastic,carbon,nano-,tube,geodesic,dome,construct,A.I.,media,drone,sentient,dolphin,neural,artisanal,beef noodles,wonton soup,hotdog,DIY,Legba,systema,systemic,military-grade,denim,saturation point,order-flow,soul-delay,long-chain hydrocarbons,assault,sensory,stimulate,sub-orbital,BASE jump,youtube,footage,paranoid,apophenia,spook,industrial grade,silent,engine,RAF,wristwatch,shoes,faded,concrete,singularity,stellar,system,galaxy,warp,kanji,refrigerator,computer,render-farm,bridge,disposable,assassin,camera,garage,warehouse,fluidity,towards,into,motion,claymore,face forwards,rebar,advert,dead,tank-traps,neon,convenience store,man,woman,boy,girl,augmented reality,savant,weathered,corrupted,film,rain,vehicle,cartel,smart-,corporation,car,sign,receding,lights,physical,numinous,table,sunglasses,gauntlet,watch,screen,jacket,courier,office,pen,boat,tower,skyscraper,shrine,vinyl,chrome,market,shanty town,tattoo,human,gang,crypto-,dissident,AI,Aleph,arcology,BAMA,biochips,biochip personality,Biosoft,Blue Nine,Bosozoku,Chatsubo,Chiba City,coffin,Cornell,Joseph (1902-1973),count zero interrupt,cyberspace,derm/dermadisk,dermatrodes,Dex,EMP,Fletcher,Freeside,gentlemen loser,geodesics,holoprojector,House of the Blue Lights,ICE,ice,black,icebreaker,Kuang Grade Mark Eleven,Korsakov's,Lado-Acheson,Loa,Maas Biolabs,macroform node,matrix,Metro Holografix,mimetic polycarbon suits,Mole IX,Mycotoxin,new yen,neurosurgery,Night City,Ninsei,Ono-Sendai,People of Importance,personality,memory,bytes,RAM,ROM construct,projects,sense/net,simstim deck,SIN,sprawl,suit,temperfoam,Tessier-Ashpool,Turing Registry,Villa Straylight,When It Changed,yiheyuan filters,zion,cluster".split(',')

const wordsAverage = 14
const wordsDeviance = 8
const sentenceAverage = 8
const sententeDeviance = 4

const sentence = () => {
  const wordCount = wordsAverage + Math.round(Math.random() * wordsDeviance * 2 - wordsDeviance)
  const string = (new Array(wordCount).fill().map(() => gibson[(Math.random() * gibson.length) | 0])).join(' ')
  return (string.substr(0, 1).toUpperCase() + string.substring(1) + '.').replace(/- /g, '-').replace(/-\./g, '.')
}

const paragraph = () => {
  const sentenceCount = sentenceAverage + Math.round(Math.random() * sententeDeviance * 2 - sententeDeviance)
  return (new Array(sentenceCount)).fill().map(s => sentence()).join(' ')
}

const LoremGibson = ({ count = 5, paragraphs = false }) => {
  const content = useMemo(() => [...new Array(count)].map(() => {
    return paragraphs
      ? <p>{paragraph()}</p>
      : sentence()
  }), [count, paragraphs])
  return content
}

export default LoremGibson
