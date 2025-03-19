import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600"
    >
      <FaArrowLeft />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
