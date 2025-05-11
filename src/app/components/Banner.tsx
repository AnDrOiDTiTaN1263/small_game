type BannerDetails = {
    text:string,
    isGood:boolean,
    duration?:number
}

export default function Banner({bannerDetails, setShowBanner}:{bannerDetails:BannerDetails,setShowBanner:React.Dispatch<React.SetStateAction<boolean>>}) {
    setTimeout(() => {
        setShowBanner(false);
    }, bannerDetails.duration? bannerDetails.duration: 3000);

    return (
        <div className='flex w-screen h-screen z-50 absolute flex-col justify-center items-center backdrop-blur-sm' onClick={()=>{setShowBanner(false)}}>
            <div className={`flex w-fit max-w-2/3 h-fit px-5 py-1 rounded-lg font-semibold ${bannerDetails.isGood?"bg-green-600 text-green-100":"bg-red-600 text-red-50"}`}>{bannerDetails.text}</div>
        </div>
    )
}
