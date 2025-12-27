export const renderStars = (rate) => {
  const stars = [];
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star text-warning"></i>);
    }
  }
  return stars;
};
