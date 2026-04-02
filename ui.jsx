import { useState } from "react";

const accommodations = [
  {
    id: 1,
    title: "제주 오션뷰 펜션",
    location: "제주도 서귀포시",
    price: "₩120,000",
    rating: 4.92,
    reviews: 128,
    dates: "3월 15일 ~ 20일",
    guestFav: true,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "강릉 한옥 스테이",
    location: "강원도 강릉시",
    price: "₩95,000",
    rating: 4.88,
    reviews: 87,
    dates: "4월 2일 ~ 5일",
    guestFav: true,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "부산 해운대 레지던스",
    location: "부산광역시 해운대구",
    price: "₩150,000",
    rating: 4.76,
    reviews: 214,
    dates: "4월 10일 ~ 13일",
    guestFav: false,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "경주 고택 민박",
    location: "경상북도 경주시",
    price: "₩80,000",
    rating: 4.95,
    reviews: 56,
    dates: "4월 18일 ~ 21일",
    guestFav: true,
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=400&h=300&fit=crop",
  },
];

const available = [
  {
    id: 5,
    title: "서울 홍대 모던 스튜디오",
    location: "서울특별시 마포구",
    price: "₩75,000",
    rating: 4.81,
    reviews: 342,
    dates: "4월 3일 ~ 6일",
    guestFav: true,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "속초 글램핑",
    location: "강원도 속초시",
    price: "₩130,000",
    rating: 4.69,
    reviews: 99,
    dates: "4월 5일 ~ 7일",
    guestFav: false,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "전주 한옥마을 게스트하우스",
    location: "전라북도 전주시",
    price: "₩60,000",
    rating: 4.77,
    reviews: 178,
    dates: "4월 8일 ~ 10일",
    guestFav: false,
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "여수 돌산도 풀빌라",
    location: "전라남도 여수시",
    price: "₩200,000",
    rating: 4.91,
    reviews: 63,
    dates: "4월 12일 ~ 15일",
    guestFav: true,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
  },
];

const newPlaces = [
  {
    id: 9,
    title: "담양 대숲 힐링하우스",
    location: "전라남도 담양군",
    price: "₩110,000",
    rating: 5.0,
    reviews: 12,
    dates: "4월 6일 ~ 9일",
    guestFav: true,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    title: "거제도 해안 독채",
    location: "경상남도 거제시",
    price: "₩180,000",
    rating: 4.98,
    reviews: 8,
    dates: "4월 9일 ~ 12일",
    guestFav: false,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    title: "남해 독일마을 펜션",
    location: "경상남도 남해군",
    price: "₩135,000",
    rating: 4.85,
    reviews: 21,
    dates: "4월 15일 ~ 18일",
    guestFav: true,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&h=300&fit=crop",
  },
];

function HeartIcon({ filled }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      fill={filled ? "#FF385C" : "rgba(0,0,0,0.35)"}
      stroke={filled ? "#FF385C" : "white"}
      strokeWidth="1.8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#222" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function SearchIcon({ color = "#555" }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

function GuestFavBadge() {
  return (
    <div style={{
      position: "absolute", top: 10, left: 10,
      background: "#fff",
      borderRadius: 20,
      padding: "4px 10px",
      display: "flex", alignItems: "center", gap: 5,
      boxShadow: "0 1px 6px rgba(0,0,0,0.18)",
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#FF385C" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      <span style={{ fontSize: 11, fontWeight: 700, color: "#222" }}>게스트 선호</span>
    </div>
  );
}

function CardCarousel({ items }) {
  const [wishlist, setWishlist] = useState([]);
  const toggleWish = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none", msOverflowStyle: "none" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ minWidth: 200, maxWidth: 200, background: "transparent", cursor: "pointer", flexShrink: 0 }}
        >
          {/* Image area */}
          <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", marginBottom: 10 }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
            />
            {/* Guest Fav Badge */}
            {item.guestFav && <GuestFavBadge />}
            {/* Heart */}
            <button
              onClick={() => toggleWish(item.id)}
              style={{ position: "absolute", top: 8, right: 10, background: "none", border: "none", cursor: "pointer", padding: 4, lineHeight: 0 }}
            >
              <HeartIcon filled={wishlist.includes(item.id)} />
            </button>
          </div>

          {/* Text info below */}
          <div style={{ paddingLeft: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 2 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#222", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: 8 }}>
                {item.location}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
                <StarIcon />
                <span style={{ fontSize: 12, color: "#222", fontWeight: 500 }}>{item.rating}</span>
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#717171", marginBottom: 2 }}>{item.title}</div>
            <div style={{ fontSize: 12, color: "#717171", marginBottom: 5 }}>{item.dates}</div>
            <div style={{ fontSize: 13, color: "#222" }}>
              <span style={{ fontWeight: 700 }}>{item.price}</span>
              <span style={{ fontWeight: 400, color: "#717171" }}> /박</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const menuItems = [
  {
    label: "숙소",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    label: "체험",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
  },
  {
    label: "서비스",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const navItems = [
  {
    label: "검색",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#FF385C" : "#717171"} strokeWidth={active ? "2.5" : "2"} strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    label: "위시리스트",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#FF385C" : "none"} stroke={active ? "#FF385C" : "#717171"} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    label: "로그인",
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#FF385C" : "#717171"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function App() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeNav, setActiveNav] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", background: "#fff", minHeight: "100vh", fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif", position: "relative", paddingBottom: 80 }}>

      {/* Header */}
      <div style={{ background: "#fff", padding: "16px 20px 0", borderBottom: "1px solid #ebebeb", position: "sticky", top: 0, zIndex: 100 }}>

        {/* Search Bar */}
        <div style={{ display: "flex", alignItems: "center", background: "#fff", borderRadius: 40, padding: "12px 18px", gap: 10, marginBottom: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.13)", border: "1px solid #ebebeb" }}>
          <SearchIcon />
          <div style={{ flex: 1 }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="어디로 떠나시나요?"
              style={{ border: "none", background: "transparent", outline: "none", fontSize: 14, color: "#222", width: "100%", fontFamily: "inherit", fontWeight: 600 }}
            />
            <div style={{ fontSize: 11, color: "#717171", marginTop: 1 }}>어떤 날 · 게스트 추가</div>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#FF385C", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <SearchIcon color="#fff" />
          </div>
        </div>

        {/* Category Menu */}
        <div style={{ display: "flex" }}>
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveMenu(i)}
              style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
                padding: "10px 0 10px",
                background: "none", border: "none", cursor: "pointer",
                borderBottom: activeMenu === i ? "2px solid #222" : "2px solid transparent",
                color: activeMenu === i ? "#222" : "#b0b0b0",
                transition: "all 0.15s",
              }}
            >
              {item.icon}
              <span style={{ fontSize: 11, fontWeight: activeMenu === i ? 700 : 400, letterSpacing: 0.1 }}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 32 }}>

        {/* Section: 인기숙소 */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#222" }}>인기 숙소</div>
              <div style={{ fontSize: 12, color: "#717171", marginTop: 3 }}>지금 가장 많이 찾는 공간</div>
            </div>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 2px", display: "flex", alignItems: "center" }}>
              <ChevronRightIcon />
            </button>
          </div>
          <CardCarousel items={accommodations} />
        </section>

        {/* Divider */}
        <div style={{ height: 1, background: "#f0f0f0" }} />

        {/* Section: 예약 가능한 숙소 */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#222" }}>예약 가능한 숙소</div>
              <div style={{ fontSize: 12, color: "#717171", marginTop: 3 }}>지금 바로 예약 확정 가능</div>
            </div>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 2px", display: "flex", alignItems: "center" }}>
              <ChevronRightIcon />
            </button>
          </div>
          <CardCarousel items={available} />
        </section>

        {/* Divider */}
        <div style={{ height: 1, background: "#f0f0f0" }} />

        {/* Section: 새로 생긴 숙소 */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#222" }}>새로 생긴 숙소</div>
              <div style={{ fontSize: 12, color: "#717171", marginTop: 3 }}>신규 오픈, 얼리버드 혜택</div>
            </div>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 2px", display: "flex", alignItems: "center" }}>
              <ChevronRightIcon />
            </button>
          </div>
          <CardCarousel items={newPlaces} />
        </section>

        {/* Banner */}
        <div style={{ background: "linear-gradient(135deg, #FF385C, #c0392b)", borderRadius: 20, padding: "22px 24px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 5 }}>호스트가 되어보세요</div>
            <div style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.5 }}>당신의 공간을 공유하고<br/>수익을 만들어보세요</div>
          </div>
          <button style={{ background: "#fff", color: "#FF385C", border: "none", borderRadius: 20, padding: "10px 16px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>시작하기</button>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#fff", borderTop: "1px solid #ebebeb", display: "flex", zIndex: 200, boxShadow: "0 -2px 12px rgba(0,0,0,0.06)" }}>
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveNav(i)}
            style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              padding: "12px 0 18px",
              background: "none", border: "none", cursor: "pointer",
              transition: "color 0.15s",
            }}
          >
            {item.icon(activeNav === i)}
            <span style={{ fontSize: 10, fontWeight: activeNav === i ? 700 : 400, color: activeNav === i ? "#FF385C" : "#717171" }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
