type BannerDotsProps = {
  length: number;
  currentSlide: number;
  onSelect?: (index: number) => void;
};

const BannerDots = (props: BannerDotsProps) => {
  const { length, currentSlide, onSelect } = props;
  return (
    <ul className='mt-3 flex justify-center space-x-3'>
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect?.(index)}
          className={`h-2.5 w-2.5 rounded-full ${currentSlide === index ? 'bg-rose-300' : 'bg-ring/50'}`}
          aria-label={`${index}번째 배너로 이동`}
        />
      ))}
    </ul>
  );
};

export default BannerDots;
