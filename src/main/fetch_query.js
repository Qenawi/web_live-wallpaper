
const liveList = ["https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Angry-Naruto.mp4",
"https://newcdn.mowplayer.com/689084892688/2021/01/18/720/8o6q9wcstqgrytsd.mp4",

]

export function fetchFromMyLiveWallPaper(pos)
{                
   return  liveList[pos%liveList.length]
}