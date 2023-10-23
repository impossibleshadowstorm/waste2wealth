export const SuccessSnackbar = ({ message }) => {
  return (
    <div class="z-50 fixed left-0 bottom-0 p-4">
      <div class="max-w-xs p-4 bg-gray-500 rounded-lg shadow">
        <div class="flex w-full h-full items-center justify-between">
          <div class="flex items-center pr-6">
            <div class="flex-shrink-0 self-start inline-flex items-center justify-center w-10 h-10 mr-3 bg-green-500 bg-opacity-20 rounded-xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.72 6.79L8.43001 11.09L6.78 9.44C6.69036 9.33532 6.58004 9.2503 6.45597 9.19027C6.33191 9.13025 6.19678 9.09652 6.05906 9.0912C5.92134 9.08588 5.78401 9.10909 5.65568 9.15936C5.52736 9.20964 5.41081 9.28589 5.31335 9.38335C5.2159 9.4808 5.13964 9.59735 5.08937 9.72568C5.03909 9.854 5.01589 9.99133 5.02121 10.1291C5.02653 10.2668 5.06026 10.4019 5.12028 10.526C5.1803 10.65 5.26532 10.7604 5.37 10.85L7.72 13.21C7.81344 13.3027 7.92426 13.376 8.0461 13.4258C8.16794 13.4755 8.2984 13.5008 8.43001 13.5C8.69234 13.4989 8.94374 13.3947 9.13 13.21L14.13 8.21C14.2237 8.11704 14.2981 8.00644 14.3489 7.88458C14.3997 7.76272 14.4258 7.63201 14.4258 7.5C14.4258 7.36799 14.3997 7.23728 14.3489 7.11542C14.2981 6.99356 14.2237 6.88296 14.13 6.79C13.9426 6.60375 13.6892 6.49921 13.425 6.49921C13.1608 6.49921 12.9074 6.60375 12.72 6.79ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
                  fill="#54D62C"
                ></path>
              </svg>
            </div>
            <span class="text-sm leading-5 text-gray-200 font-semibold">
              {message}
            </span>
          </div>
          <button class="inline-block text-gray-400 hover:text-gray-300">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.93996 5.00001L8.80663 2.14001C8.93216 2.01448 9.00269 1.84421 9.00269 1.66668C9.00269 1.48914 8.93216 1.31888 8.80663 1.19335C8.68109 1.06781 8.51083 0.997284 8.33329 0.997284C8.15576 0.997284 7.9855 1.06781 7.85996 1.19335L4.99996 4.06001L2.13996 1.19335C2.01442 1.06781 1.84416 0.997284 1.66663 0.997284C1.48909 0.997284 1.31883 1.06781 1.19329 1.19335C1.06776 1.31888 0.997231 1.48914 0.997231 1.66668C0.997231 1.84421 1.06776 2.01448 1.19329 2.14001L4.05996 5.00001L1.19329 7.86001C1.13081 7.92199 1.08121 7.99572 1.04737 8.07696C1.01352 8.1582 0.996094 8.24534 0.996094 8.33334C0.996094 8.42135 1.01352 8.50849 1.04737 8.58973C1.08121 8.67097 1.13081 8.7447 1.19329 8.80668C1.25527 8.86916 1.329 8.91876 1.41024 8.95261C1.49148 8.98645 1.57862 9.00388 1.66663 9.00388C1.75463 9.00388 1.84177 8.98645 1.92301 8.95261C2.00425 8.91876 2.07798 8.86916 2.13996 8.80668L4.99996 5.94001L7.85996 8.80668C7.92194 8.86916 7.99567 8.91876 8.07691 8.95261C8.15815 8.98645 8.24529 9.00388 8.33329 9.00388C8.4213 9.00388 8.50844 8.98645 8.58968 8.95261C8.67092 8.91876 8.74465 8.86916 8.80663 8.80668C8.86911 8.7447 8.91871 8.67097 8.95255 8.58973C8.9864 8.50849 9.00383 8.42135 9.00383 8.33334C9.00383 8.24534 8.9864 8.1582 8.95255 8.07696C8.91871 7.99572 8.86911 7.92199 8.80663 7.86001L5.93996 5.00001Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export const WarningSnackbar = ({ message }) => {
  return (
    <div class="z-50 fixed left-0 bottom-0 p-4">
      <div class="max-w-xs p-4 bg-gray-500 rounded-lg shadow">
        <div class="flex w-full h-full items-center justify-between">
          <div class="flex items-center pr-6">
            <div class="flex-shrink-0 self-start inline-flex items-center justify-center w-10 h-10 mr-3 bg-yellow-500 bg-opacity-20 rounded-xl">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0005 15C11.8027 15 11.6093 15.0586 11.4449 15.1685C11.2804 15.2784 11.1523 15.4346 11.0766 15.6173C11.0009 15.8 10.9811 16.0011 11.0197 16.1951C11.0583 16.3891 11.1535 16.5673 11.2933 16.7071C11.4332 16.847 11.6114 16.9422 11.8054 16.9808C11.9993 17.0194 12.2004 16.9996 12.3831 16.9239C12.5659 16.8482 12.722 16.72 12.8319 16.5556C12.9418 16.3911 13.0005 16.1978 13.0005 16C13.0005 15.7348 12.8951 15.4804 12.7076 15.2929C12.52 15.1054 12.2657 15 12.0005 15ZM22.6705 16.47L14.6205 2.47C14.3603 2.00351 13.9802 1.61495 13.5196 1.34447C13.0591 1.07398 12.5346 0.931366 12.0005 0.931366C11.4663 0.931366 10.9419 1.07398 10.4813 1.34447C10.0207 1.61495 9.64065 2.00351 9.38046 2.47L1.38046 16.47C1.11125 16.924 0.966598 17.441 0.9611 17.9688C0.955602 18.4966 1.08945 19.0165 1.34914 19.476C1.60883 19.9356 1.98516 20.3185 2.44014 20.586C2.89512 20.8536 3.41264 20.9964 3.94046 21H20.0605C20.5925 21.0052 21.1164 20.8689 21.5784 20.6049C22.0403 20.3409 22.4238 19.9588 22.6894 19.4978C22.9551 19.0368 23.0933 18.5134 23.09 17.9813C23.0866 17.4493 22.9418 16.9277 22.6705 16.47ZM20.9405 18.47C20.8528 18.6259 20.7249 18.7555 20.5701 18.8452C20.4154 18.9349 20.2393 18.9815 20.0605 18.98H3.94046C3.76157 18.9815 3.58556 18.9349 3.43077 18.8452C3.27599 18.7555 3.14811 18.6259 3.06046 18.47C2.97269 18.318 2.92648 18.1455 2.92648 17.97C2.92648 17.7945 2.97269 17.622 3.06046 17.47L11.0605 3.47C11.1444 3.3062 11.2719 3.16873 11.4289 3.07274C11.5859 2.97675 11.7664 2.92596 11.9505 2.92596C12.1345 2.92596 12.315 2.97675 12.472 3.07274C12.629 3.16873 12.7565 3.3062 12.8405 3.47L20.8905 17.47C20.9897 17.6198 21.0467 17.7936 21.0555 17.9731C21.0643 18.1526 21.0245 18.3312 20.9405 18.49V18.47ZM12.0005 7C11.7352 7 11.4809 7.10535 11.2933 7.29289C11.1058 7.48043 11.0005 7.73478 11.0005 8V12C11.0005 12.2652 11.1058 12.5196 11.2933 12.7071C11.4809 12.8946 11.7352 13 12.0005 13C12.2657 13 12.52 12.8946 12.7076 12.7071C12.8951 12.5196 13.0005 12.2652 13.0005 12V8C13.0005 7.73478 12.8951 7.48043 12.7076 7.29289C12.52 7.10535 12.2657 7 12.0005 7Z"
                  fill="#FFC107"
                ></path>
              </svg>
            </div>
            <span class="text-sm leading-5 text-gray-200 font-semibold">
              {message}
            </span>
          </div>
          <button class="inline-block text-gray-400 hover:text-gray-300">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.93996 5.00001L8.80663 2.14001C8.93216 2.01448 9.00269 1.84421 9.00269 1.66668C9.00269 1.48914 8.93216 1.31888 8.80663 1.19335C8.68109 1.06781 8.51083 0.997284 8.33329 0.997284C8.15576 0.997284 7.9855 1.06781 7.85996 1.19335L4.99996 4.06001L2.13996 1.19335C2.01442 1.06781 1.84416 0.997284 1.66663 0.997284C1.48909 0.997284 1.31883 1.06781 1.19329 1.19335C1.06776 1.31888 0.997231 1.48914 0.997231 1.66668C0.997231 1.84421 1.06776 2.01448 1.19329 2.14001L4.05996 5.00001L1.19329 7.86001C1.13081 7.92199 1.08121 7.99572 1.04737 8.07696C1.01352 8.1582 0.996094 8.24534 0.996094 8.33334C0.996094 8.42135 1.01352 8.50849 1.04737 8.58973C1.08121 8.67097 1.13081 8.7447 1.19329 8.80668C1.25527 8.86916 1.329 8.91876 1.41024 8.95261C1.49148 8.98645 1.57862 9.00388 1.66663 9.00388C1.75463 9.00388 1.84177 8.98645 1.92301 8.95261C2.00425 8.91876 2.07798 8.86916 2.13996 8.80668L4.99996 5.94001L7.85996 8.80668C7.92194 8.86916 7.99567 8.91876 8.07691 8.95261C8.15815 8.98645 8.24529 9.00388 8.33329 9.00388C8.4213 9.00388 8.50844 8.98645 8.58968 8.95261C8.67092 8.91876 8.74465 8.86916 8.80663 8.80668C8.86911 8.7447 8.91871 8.67097 8.95255 8.58973C8.9864 8.50849 9.00383 8.42135 9.00383 8.33334C9.00383 8.24534 8.9864 8.1582 8.95255 8.07696C8.91871 7.99572 8.86911 7.92199 8.80663 7.86001L5.93996 5.00001Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export const ErrorSnackbar = ({ message }) => {
  return (
    <div class="z-50 fixed left-0 bottom-0 p-4">
      <div class="max-w-xs p-4 bg-gray-500 rounded-lg shadow">
        <div class="flex w-full h-full items-center justify-between">
          <div class="flex items-center pr-6">
            <div class="flex-shrink-0 self-start inline-flex items-center justify-center w-10 h-10 mr-3 bg-red-500 bg-opacity-20 rounded-xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12C9.75278 12 9.5111 12.0733 9.30554 12.2107C9.09998 12.348 8.93976 12.5432 8.84516 12.7716C8.75055 13.0001 8.72579 13.2514 8.77402 13.4939C8.82225 13.7363 8.94131 13.9591 9.11612 14.1339C9.29094 14.3087 9.51367 14.4277 9.75614 14.476C9.99862 14.5242 10.25 14.4995 10.4784 14.4049C10.7068 14.3102 10.902 14.15 11.0393 13.9445C11.1767 13.7389 11.25 13.4972 11.25 13.25C11.25 12.9185 11.1183 12.6005 10.8839 12.3661C10.6495 12.1317 10.3315 12 10 12ZM10 10.5C10.2652 10.5 10.5196 10.3946 10.7071 10.2071C10.8946 10.0196 11 9.76522 11 9.5V6.5C11 6.23478 10.8946 5.98043 10.7071 5.79289C10.5196 5.60536 10.2652 5.5 10 5.5C9.73479 5.5 9.48043 5.60536 9.2929 5.79289C9.10536 5.98043 9 6.23478 9 6.5V9.5C9 9.76522 9.10536 10.0196 9.2929 10.2071C9.48043 10.3946 9.73479 10.5 10 10.5ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34874 18.9425 4.80691 17.0678 2.93219C15.1931 1.05746 12.6513 0.00294858 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C17.9976 12.121 17.1539 14.1544 15.6542 15.6542C14.1544 17.1539 12.121 17.9976 10 18Z"
                  fill="#FF4842"
                ></path>
              </svg>
            </div>
            <span class="text-sm leading-5 text-gray-200 font-semibold">
              {message}
            </span>
          </div>
          <button class="inline-block text-gray-400 hover:text-gray-300">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.93996 5.00001L8.80663 2.14001C8.93216 2.01448 9.00269 1.84421 9.00269 1.66668C9.00269 1.48914 8.93216 1.31888 8.80663 1.19335C8.68109 1.06781 8.51083 0.997284 8.33329 0.997284C8.15576 0.997284 7.9855 1.06781 7.85996 1.19335L4.99996 4.06001L2.13996 1.19335C2.01442 1.06781 1.84416 0.997284 1.66663 0.997284C1.48909 0.997284 1.31883 1.06781 1.19329 1.19335C1.06776 1.31888 0.997231 1.48914 0.997231 1.66668C0.997231 1.84421 1.06776 2.01448 1.19329 2.14001L4.05996 5.00001L1.19329 7.86001C1.13081 7.92199 1.08121 7.99572 1.04737 8.07696C1.01352 8.1582 0.996094 8.24534 0.996094 8.33334C0.996094 8.42135 1.01352 8.50849 1.04737 8.58973C1.08121 8.67097 1.13081 8.7447 1.19329 8.80668C1.25527 8.86916 1.329 8.91876 1.41024 8.95261C1.49148 8.98645 1.57862 9.00388 1.66663 9.00388C1.75463 9.00388 1.84177 8.98645 1.92301 8.95261C2.00425 8.91876 2.07798 8.86916 2.13996 8.80668L4.99996 5.94001L7.85996 8.80668C7.92194 8.86916 7.99567 8.91876 8.07691 8.95261C8.15815 8.98645 8.24529 9.00388 8.33329 9.00388C8.4213 9.00388 8.50844 8.98645 8.58968 8.95261C8.67092 8.91876 8.74465 8.86916 8.80663 8.80668C8.86911 8.7447 8.91871 8.67097 8.95255 8.58973C8.9864 8.50849 9.00383 8.42135 9.00383 8.33334C9.00383 8.24534 8.9864 8.1582 8.95255 8.07696C8.91871 7.99572 8.86911 7.92199 8.80663 7.86001L5.93996 5.00001Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const SuccessfulAppointmentModal = ({
  show,
  hideModal,
  title,
  description,
}) => {
  return (
    <section
      className={`fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80 overflow-y-auto ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="max-w-lg w-full m-auto p-8 bg-white rounded-md">
        <div className="flex items-center justify-center w-10 h-10 mb-4 bg-green-100 rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="auto-svg-1-1"
          >
            <path
              d="M12.4733 4.80667C12.4114 4.74418 12.3376 4.69458 12.2564 4.66074C12.1751 4.62689 12.088 4.60947 12 4.60947C11.912 4.60947 11.8249 4.62689 11.7436 4.66074C11.6624 4.69458 11.5886 4.74418 11.5267 4.80667L6.56 9.78L4.47333 7.68667C4.40899 7.62451 4.33302 7.57563 4.24979 7.54283C4.16655 7.51003 4.07767 7.49394 3.98821 7.49549C3.89876 7.49703 3.81049 7.51619 3.72844 7.55185C3.64638 7.58751 3.57216 7.63898 3.51 7.70333C3.44784 7.76768 3.39896 7.84364 3.36616 7.92688C3.33336 8.01011 3.31727 8.099 3.31882 8.18845C3.32037 8.2779 3.33952 8.36618 3.37518 8.44823C3.41084 8.53028 3.46232 8.60451 3.52667 8.66667L6.08667 11.2267C6.14864 11.2892 6.22238 11.3387 6.30362 11.3726C6.38485 11.4064 6.47199 11.4239 6.56 11.4239C6.64801 11.4239 6.73514 11.4064 6.81638 11.3726C6.89762 11.3387 6.97136 11.2892 7.03333 11.2267L12.4733 5.78667C12.541 5.72424 12.595 5.64847 12.6319 5.56414C12.6689 5.4798 12.688 5.38873 12.688 5.29667C12.688 5.2046 12.6689 5.11353 12.6319 5.02919C12.595 4.94486 12.541 4.86909 12.4733 4.80667Z"
              fill="#2AD168"
            ></path>
          </svg>
        </div>
        <h3
          className="mb-2 text-2xl font-semibold text-coolGray-900"
          data-config-id="auto-txt-1-1"
        >
          {title}
        </h3>
        <p
          className="mb-6 font-medium text-sm text-coolGray-500"
          data-config-id="auto-txt-2-1"
        >
          {description}
        </p>
        <div onClick={hideModal} className="flex flex-wrap justify-end -m-2">
          <div className="w-full md:w-1/2 p-2">
            <button className="flex flex-wrap justify-center w-full px-4 py-2.5 bg-primary hover:bg-green-600 font-medium text-base text-white  rounded-md shadow-button">
              <p className="text-white">Okay</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
