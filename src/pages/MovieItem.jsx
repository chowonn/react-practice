import { getPbImageURL } from '@/utils';

export default function MovieItem({ item }) {
  return (
    <li>
      <figure>
        <img
          src={getPbImageURL(item, 'poster')}
          className="w-[170px] h-[236px] rounded-xl mb-5"
          alt=""
        />
        <figcaption className="text-center">
          <span className="title text-xl font-bold">{item.movieTitle}</span>
          <div className="info flex justify-center text-gray-500 mt-1">
            <div className="egg flex items-center">
              <img
                src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                alt="Golden Egg great"
                className="w-4 h-4 mr-1"
              />
              <span className="mr-4">{item.egg}&#37;</span>
            </div>
            <span className="ticketingRate">
              예매율 {item.ticketingRate}&#37;
            </span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
