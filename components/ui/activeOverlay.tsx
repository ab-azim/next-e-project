const ActiveOverlay = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div>
      {isActive && (
        <div
          onClick={onClick}
          className="w-full h-screen fixed top-0 left-0 z-1"
        />
      )}
    </div>
  );
};

export default ActiveOverlay;
