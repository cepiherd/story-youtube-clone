import Short from "./lib/components/short/short";

function App() {
  let storyData = [{ id:1 , channel  :"Cepiherd" , caption: 'Clone youtube as you like' , channelImage: "https://avatars.githubusercontent.com/u/52832395?v=4" , urlYoutube : "https://www.youtube.com/embed/yOeNo6aTizg?autoplay=0&controls=0"} , {id: 2, channel : "Hena Nurohmah" , caption : 'Cloning again', channelImage: "https://pbs.twimg.com/profile_images/939332634164969474/YTld9EH9_400x400.jpg",urlYoutube : "https://www.youtube.com/embed/dEOhEEElRNA?autoplay=0&controls=0"}]
  const StoryEach = storyData.map((item) => {
   return  (<Short channel={item.channel} caption={item.caption} channelImage={item.channelImage} urlYoutube={item.urlYoutube}/>)
  })
  return (
    <main className=" flex justify-center w-full h-screen">
      <div className="  h-full  md:px-2 snap-mandatory snap-y overflow-y-auto  ">
        {StoryEach}
      </div>
    </main>
  );
}

export default App;
