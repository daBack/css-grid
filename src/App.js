import './App.css';

const App = () => {
  return (
    <div className='grid'>

      <div className='logo'>
        <h1>Totally Tubular</h1>
      </div>

      <div className='nav'>
        <p>MIKE</p>
        <p>DUSTIN</p>
        <p>LUCAS</p>
        <p>WILL</p>
      </div>

      <img 
        className='quoteImg'
        src='https://i.ibb.co/3WPy4hF/asd.png' 
        alt='title' />

      <img
        className='image'
        src='https://pbs.twimg.com/profile_images/762638100417814528/0HwN79Hv_400x400.jpg'
        alt='Dustin'
      />

      <div className='text'>
        <p>Dustin is a cool dude who always has his cap on. </p>
        <p>The legend says that he has the most sexy taunt man could ever acknowledged.</p>
      </div>

      <div className='rawr'>
        “RRRRRrrrrrrrrrrrrr”
      </div>


    </div>
  );
}

export default App;
