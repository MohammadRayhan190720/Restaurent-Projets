
const HomeBg = () => {
  return (
    <div className="bg-bannerBg min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center mt-10">
      <div className="  text-center bg-base-300 p-5 w-4/5 space-y-5">
        <h2 className="text-4xl font-bold">Bistro Boss</h2>
        <p className="w-1/2 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          fuga, at recusandae consequatur harum hic autem omnis iure, modi
          debitis in laborum nulla suscipit adipisci? Soluta, magnam veritatis?
          Itaque, beatae!
        </p>
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item"
          />
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBg;