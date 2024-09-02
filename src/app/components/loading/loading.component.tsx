import { SyncLoader } from "react-spinners";

interface LoadingProps {
  message?: string;
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <div className="flex fixed h-screen top-0 left-0 w-screen items-center justify-center bg-black bg-opacity-50 flex-col gap-5">
      <SyncLoader size={30} />
      {message && (
        <p className="text-white mb-6 text-lg max-w-[50%] text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default Loading;
