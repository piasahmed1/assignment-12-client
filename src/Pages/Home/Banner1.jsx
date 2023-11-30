import banner2 from '../../assets/Banner2.jpg'


const Banner1 = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <img className='w-full' src={banner2} alt="" />
      <div className='text-center'>
<h1 className='text-white font-bold text-6xl'>University Hostel Meal Management <br /> System Online Ordering</h1>
      <br />
      <p className='font-bold text-red-400'>The Hostel Meal Management website for the university provides an integrated <br /> platform facilitating efficient meal ordering, menu management, dietary preferences, and online payments, <br /> streamlining the entire dining experience for students.</p>
      <br />
      <div className='flex gap-5 justify-center items-center'>
      <input className='w-1/2 text-orange-700' type="search" name="Search Here" id="search" />
      <button className='btn btn-primary btn-sm'>Search</button>
      </div>
</div>
      
    </div>
    
  );
};

export default Banner1;