import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex gap-12 text-white font-bold">
        <li>
          <NavLink
            to="/Movie"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-[#2F2F2F]' : ''
            }
          >
            영화
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Theater"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-[#2F2F2F]' : ''
            }
          >
            극장
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Ticketing"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-[#2F2F2F]' : ''
            }
          >
            예매
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Store"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-[#2F2F2F]' : ''
            }
          >
            스토어
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Event"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-[#2F2F2F]' : ''
            }
          >
            이벤트
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Benefits"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-[#2F2F2F]' : ''
            }
          >
            혜택
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
