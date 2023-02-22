import Directory from "../../components/Directory/Directory";

const items = [
    {
      id: 1,
      name: "Cars",
      imgUrl: "https://c4.wallpaperflare.com/wallpaper/279/776/836/lamborghini-sc18-supercar-2018-cars-4k-wallpaper-preview.jpg"

    },

    {
      id: 2,
      name: "Bikes",
      imgUrl: "https://c4.wallpaperflare.com/wallpaper/548/1013/316/cars-harleydavidson-vrod-auto-1920x1080-motorcycles-harley-davidson-hd-art-wallpaper-preview.jpg"

    },

    {
      id: 3,
      name: "Tanks",
      imgUrl: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2017/08/21/worldoftanksxboxonex_feature.jpg"

    },

    {
      id: 4,
      name: "Jeeps",
      imgUrl: "https://c4.wallpaperflare.com/wallpaper/438/1013/187/car-2018-off-roading-off-road-racing-wallpaper-preview.jpg"

    },

    {
      id: 5,
      name: "Flamethrowers",
      imgUrl: "https://1.bp.blogspot.com/-gYxghS05F20/YaofRKn9FKI/AAAAAAABAIw/PafRRTBDdSIRAgmIXwcVGms0C7dLZslVgCNcBGAsYHQ/s800/Exothermic%2BTechnologies%2BFlame%2BThrower%2B1.jpg"

    }
]

function Home() {
    return(
        <Directory items = {items} />
    )
}

export default Home;