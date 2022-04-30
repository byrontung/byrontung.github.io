import React from "react";
import "./Logo.css";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      className="logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 7,
      }}
    >
      <svg
        width="321"
        height="385"
        viewBox="0 0 321 385"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M98.9094 63.2C106.509 66.6667 112.043 71.4667 115.509 77.6C118.976 83.7333 120.709 90.0667 120.709 96.6C120.709 108.733 116.376 118.333 107.709 125.4C99.176 132.467 86.376 136 69.3094 136C55.576 136 43.1094 133.733 31.9094 129.2C20.8427 124.667 10.6427 118.467 1.30938 110.6C0.909375 110.067 1.04271 109.533 1.70937 109C2.37604 108.333 3.17604 107.8 4.10938 107.4C5.17604 106.867 6.30938 106.533 7.50938 106.4C8.70938 106.133 9.70938 106.2 10.5094 106.6C13.0427 109.267 15.576 111 18.1094 111.8C20.776 112.467 23.9094 112.467 27.5094 111.8C30.976 111.133 34.0427 109.8 36.7094 107.8C39.5094 105.8 42.1094 102.733 44.5094 98.6C47.0427 94.4667 49.5094 89.0667 51.9094 82.4C54.4427 75.7333 57.1094 67.3333 59.9094 57.2C62.7094 47.3333 66.0427 38.6667 69.9094 31.2C73.9094 23.7333 78.7094 17.4667 84.3094 12.4C83.1094 12.1333 81.9094 12 80.7094 12C79.5094 12 78.176 12 76.7094 12C72.3094 12 67.9094 12.6667 63.5094 14C59.2427 15.2 55.176 17 51.3094 19.4C47.4427 21.8 43.976 24.7333 40.9094 28.2C37.8427 31.6667 35.3094 35.6 33.3094 40C33.0427 40.2667 32.7094 40.3333 32.3094 40.2C32.0427 39.9333 31.976 39.5333 32.1094 39C33.7094 34.8667 36.1094 30.8667 39.3094 27C42.6427 23.1333 46.576 19.7333 51.1094 16.8C55.6427 13.8667 60.7094 11.5333 66.3094 9.79999C72.0427 8.06666 78.176 7.19999 84.7094 7.19999C85.776 7.19999 86.776 7.19999 87.7094 7.19999C88.776 7.19999 89.8427 7.26666 90.9094 7.4C95.7094 4.06666 101.443 1.59999 108.109 -1.43051e-06C108.776 -1.43051e-06 109.109 0.199996 109.109 0.599991C109.109 0.999994 108.776 1.33333 108.109 1.59999C105.843 2.26666 103.576 3.13332 101.309 4.19999C99.0427 5.13333 96.9094 6.33333 94.9094 7.79999C100.243 8.59999 104.843 9.93332 108.709 11.8C112.709 13.5333 115.976 15.7333 118.509 18.4C121.043 20.9333 122.909 23.7333 124.109 26.8C125.309 29.7333 125.909 32.8 125.909 36C125.909 40 125.109 43.6667 123.509 47C122.043 50.3333 120.043 53.2 117.509 55.6C114.976 58 112.043 59.8667 108.709 61.2C105.509 62.5333 102.243 63.2 98.9094 63.2ZM73.9094 133C79.9094 133 85.2427 132.2 89.9094 130.6C94.7094 128.867 98.7094 126.6 101.909 123.8C105.243 120.867 107.709 117.467 109.309 113.6C111.043 109.733 111.909 105.533 111.909 101C111.909 81.6667 101.843 69.3333 81.7094 64C81.3094 63.6 81.376 63.0667 81.9094 62.4C82.4427 61.7333 83.176 61.1333 84.1094 60.6C85.0427 60.0667 86.1094 59.6667 87.3094 59.4C88.5094 59.1333 89.5094 59.0667 90.3094 59.2C91.5094 59.7333 92.576 60.1333 93.5094 60.4C94.576 60.5333 95.9094 60.6 97.5094 60.6C99.9094 60.6 102.243 60.1333 104.509 59.2C106.909 58.1333 108.976 56.6667 110.709 54.8C112.576 52.9333 114.043 50.8 115.109 48.4C116.309 45.8667 116.909 43.0667 116.909 40C116.909 33.6 114.576 27.9333 109.909 23C105.376 17.9333 98.3094 14.5333 88.7094 12.8C84.3094 17.3333 80.376 22.9333 76.9094 29.6C73.4427 36.2667 70.5094 44.2667 68.1094 53.6C64.6427 66.2667 61.0427 76.6 57.3094 84.6C53.7094 92.4667 49.976 98.6667 46.1094 103.2C42.2427 107.733 38.2427 110.867 34.1094 112.6C29.976 114.333 25.776 115.267 21.5094 115.4C28.3094 120.467 36.2427 124.667 45.3094 128C54.376 131.333 63.9094 133 73.9094 133ZM171.248 89.6C171.382 89.2 171.715 88.8 172.248 88.4C172.782 87.8667 173.382 87.3333 174.048 86.8C174.848 86.2667 175.582 85.8667 176.248 85.6C177.048 85.2 177.648 85 178.048 85C179.248 85 179.715 85.4667 179.448 86.4C176.515 94.6667 173.648 102.733 170.848 110.6C168.048 118.333 165.048 126.4 161.848 134.8C158.248 144.133 154.382 151.933 150.248 158.2C146.248 164.6 141.982 169.733 137.448 173.6C133.048 177.6 128.448 180.467 123.648 182.2C118.848 183.933 113.915 184.8 108.848 184.8C101.782 184.8 96.4484 183 92.8484 179.4C89.1151 175.933 87.2484 171.6 87.2484 166.4C87.2484 164 87.9151 161.467 89.2484 158.8C90.4484 156.133 92.3818 153.8 95.0484 151.8C95.4484 151.533 95.8484 151.667 96.2484 152.2C96.5151 152.733 96.5151 153.133 96.2484 153.4C94.1151 155.933 93.0484 158.8 93.0484 162C93.0484 167.6 94.6484 172.133 97.8484 175.6C101.048 179.067 105.915 180.8 112.448 180.8C117.115 180.8 121.382 180.067 125.248 178.6C129.248 177.133 132.982 174.533 136.448 170.8C140.048 167.067 143.448 162.067 146.648 155.8C149.982 149.533 153.382 141.667 156.848 132.2C158.315 127.8 159.715 123.733 161.048 120C162.515 116.267 163.982 112.4 165.448 108.4C160.382 116.4 155.048 122.933 149.448 128C143.982 133.067 139.115 135.8 134.848 136.2C133.115 136.2 131.848 135.4 131.048 133.8C130.248 132.2 129.848 130 129.848 127.2C129.848 124.8 130.115 122.2 130.648 119.4C131.182 116.467 131.915 113.467 132.848 110.4C133.915 107.333 135.182 104.267 136.648 101.2C138.248 98 139.982 94.9333 141.848 92C140.382 93.0667 138.848 94.2667 137.248 95.6C135.648 96.8 134.315 97.9333 133.248 99C132.848 99.2667 132.448 99.2 132.048 98.8C131.782 98.2667 131.782 97.8 132.048 97.4C133.915 95.5333 136.448 93.4 139.648 91C142.848 88.6 145.982 86.6 149.048 85C150.382 85 150.915 85.6 150.648 86.8C148.648 89.4667 146.782 92.4667 145.048 95.8C143.448 99 142.048 102.267 140.848 105.6C139.648 108.8 138.715 112 138.048 115.2C137.382 118.4 137.048 121.267 137.048 123.8C137.048 127.533 138.315 129.4 140.848 129.4C142.982 129.4 145.515 128 148.448 125.2C151.515 122.267 154.515 118.8 157.448 114.8C160.515 110.667 163.248 106.333 165.648 101.8C168.182 97.1333 170.048 93.0667 171.248 89.6ZM202.903 90.4C202.903 92.4 202.703 94.7333 202.303 97.4C201.903 100.067 201.37 102.733 200.703 105.4C203.37 99 206.303 94 209.503 90.4C212.703 86.6667 216.17 84.8 219.903 84.8C221.37 84.8 222.703 85.2 223.903 86C225.103 86.8 225.703 87.9333 225.703 89.4C225.703 90.4667 225.303 91.8667 224.503 93.6C223.703 95.2 222.903 96.4 222.103 97.2C221.303 97.7333 220.903 97.5333 220.903 96.6C220.903 94.3333 219.37 93.2 216.303 93.2C211.636 93.2 207.436 96.7333 203.703 103.8C199.97 110.733 196.436 120.4 193.103 132.8C192.836 134.133 191.903 135 190.303 135.4C188.836 135.8 187.57 136 186.503 136C185.036 136 184.703 135.267 185.503 133.8C186.703 131 187.836 128 188.903 124.8C189.97 121.467 190.97 118.133 191.903 114.8C192.97 111.467 193.836 108.2 194.503 105C195.17 101.8 195.703 98.8667 196.103 96.2C196.636 92.2 195.97 90.2 194.103 90.2C193.036 90.2 191.77 90.8 190.303 92C188.97 93.2 187.703 94.6 186.503 96.2C185.97 96.4667 185.503 96.4667 185.103 96.2C184.703 95.8 184.636 95.3333 184.903 94.8C186.903 92.2667 189.103 90 191.503 88C194.036 85.8667 196.37 84.8 198.503 84.8C201.436 84.8 202.903 86.6667 202.903 90.4ZM250.166 84.8C253.766 84.8 256.432 86 258.166 88.4C259.899 90.8 260.766 93.9333 260.766 97.8C260.766 102.333 259.899 106.867 258.166 111.4C256.432 115.933 254.232 120.067 251.566 123.8C248.899 127.4 245.966 130.333 242.766 132.6C239.699 134.867 236.832 136 234.166 136C230.966 136 228.432 134.733 226.566 132.2C224.699 129.667 223.766 126.067 223.766 121.4C223.766 117.667 224.499 113.667 225.966 109.4C227.432 105.133 229.366 101.2 231.766 97.6C234.299 93.8667 237.099 90.8 240.166 88.4C243.366 86 246.699 84.8 250.166 84.8ZM238.166 129.8C240.166 129.8 242.099 129.133 243.966 127.8C245.966 126.333 247.699 124.467 249.166 122.2C250.632 119.8 251.766 117.067 252.566 114C253.499 110.933 253.966 107.733 253.966 104.4C253.966 100.4 253.299 97.2667 251.966 95C250.632 92.6 248.432 91.4 245.366 91.4C243.366 91.4 241.432 92.1333 239.566 93.6C237.699 94.9333 236.032 96.8 234.566 99.2C233.232 101.467 232.166 104.2 231.366 107.4C230.566 110.467 230.166 113.733 230.166 117.2C230.166 125.6 232.832 129.8 238.166 129.8ZM319.088 123.2C319.488 122.933 319.888 122.933 320.288 123.2C320.688 123.467 320.821 123.867 320.688 124.4C318.421 127.467 315.888 130.2 313.088 132.6C310.421 134.867 307.888 136 305.488 136C301.354 136 299.288 133.333 299.288 128C299.288 123.467 300.088 118.467 301.688 113C303.288 107.4 305.488 101.8 308.288 96.2C308.821 95.2667 309.088 94.3333 309.088 93.4C309.088 91.9333 308.421 91.2 307.088 91.2C302.154 91.2 296.688 94.6 290.688 101.4C284.821 108.2 279.354 118.867 274.288 133.4C274.021 134.2 273.288 134.867 272.088 135.4C270.888 135.8 269.754 136 268.688 136C267.221 136 266.688 135.4 267.088 134.2C269.354 128.467 271.688 122 274.088 114.8C276.621 107.6 278.821 100.467 280.688 93.4C281.221 90.8667 280.754 89.6 279.288 89.6C277.954 89.6 276.621 90.2667 275.288 91.6C273.954 92.9333 272.554 94.6667 271.088 96.8C270.821 97.0667 270.488 97 270.088 96.6C269.821 96.2 269.754 95.8 269.888 95.4C271.354 93.1333 273.354 90.8 275.887 88.4C278.421 86 281.154 84.8 284.088 84.8C287.421 84.8 288.554 87.0667 287.488 91.6C286.954 94.5333 286.221 97.6667 285.288 101C284.354 104.2 283.354 107.4 282.288 110.6C284.154 107 286.354 103.6 288.888 100.4C291.421 97.2 294.021 94.4667 296.688 92.2C299.488 89.9333 302.221 88.1333 304.888 86.8C307.688 85.4667 310.288 84.8 312.688 84.8C314.288 84.8 315.488 85.2 316.288 86C317.221 86.8 317.688 87.7333 317.688 88.8C317.688 90.5333 317.288 92.2667 316.488 94C313.688 99.0667 311.288 104.4 309.288 110C307.421 115.467 306.488 120.533 306.488 125.2C306.488 128.533 307.554 130.2 309.688 130.2C312.488 130.2 315.621 127.867 319.088 123.2ZM182.105 218.6C182.905 219.4 182.838 220.4 181.905 221.6C179.771 224.667 178.171 226 177.105 225.6C175.505 225.067 173.905 224.6 172.305 224.2C170.705 223.667 169.038 223.2 167.305 222.8C159.838 223.467 153.171 227.4 147.305 234.6C141.438 241.667 136.171 252.867 131.505 268.2C124.571 290.733 114.905 307.667 102.505 319C90.238 330.2 75.3714 335.8 57.9047 335.8C53.1047 335.8 48.9714 335.2 45.5047 334C42.038 332.667 39.1714 331 36.9047 329C34.638 326.867 32.9714 324.467 31.9047 321.8C30.838 319 30.3047 316.2 30.3047 313.4C30.3047 305.4 34.238 298.733 42.1047 293.4C42.638 293.4 42.9714 293.667 43.1047 294.2C43.238 294.733 43.1714 295.2 42.9047 295.6C41.038 297.067 39.638 298.667 38.7047 300.4C37.9047 302 37.5047 304.333 37.5047 307.4C37.5047 314.2 39.838 319.6 44.5047 323.6C49.3047 327.467 56.3714 329.4 65.7047 329.4C72.1047 329.4 77.9714 328.533 83.3047 326.8C88.638 325.067 93.5047 322.133 97.9047 318C102.438 313.733 106.571 308.067 110.305 301C114.171 293.933 117.838 285.067 121.305 274.4C126.105 259.467 131.838 247.467 138.505 238.4C145.171 229.2 152.705 223.467 161.105 221.2C152.171 218.933 142.905 217.133 133.305 215.8C123.705 214.467 114.171 213.8 104.705 213.8C97.238 213.8 90.5714 215.067 84.7047 217.6C78.9714 220 74.1714 223.267 70.3047 227.4C66.438 231.533 63.638 236.4 61.9047 242C60.1714 247.467 59.7047 253.2 60.5047 259.2C59.7047 260.4 58.9714 260.467 58.3047 259.4C57.5047 252.867 57.9714 246.467 59.7047 240.2C61.5714 233.933 64.7047 228.333 69.1047 223.4C73.5047 218.467 79.238 214.533 86.3047 211.6C93.3714 208.667 101.705 207.2 111.305 207.2C125.571 207.2 138.505 208.4 150.105 210.8C161.838 213.067 172.505 215.667 182.105 218.6ZM148.734 336C147.001 336 145.468 335.2 144.134 333.6C142.801 331.867 142.134 329.667 142.134 327C142.134 324.867 142.401 322.4 142.934 319.6C143.601 316.667 144.401 313.6 145.334 310.4C146.401 307.2 147.668 304 149.134 300.8C150.601 297.6 152.268 294.6 154.134 291.8C152.668 292.867 151.134 294.067 149.534 295.4C147.934 296.6 146.601 297.733 145.534 298.8C145.134 299.067 144.801 299 144.534 298.6C144.268 298.067 144.201 297.6 144.334 297.2C145.268 296.267 146.468 295.2 147.934 294C149.401 292.8 150.934 291.6 152.534 290.4C154.268 289.2 156.001 288.067 157.734 287C159.601 285.8 161.334 284.8 162.934 284C163.468 283.867 163.868 284 164.134 284.4C164.534 284.8 164.668 285.267 164.534 285.8C160.268 291.267 156.801 297.333 154.134 304C151.601 310.533 150.334 316.8 150.334 322.8C150.334 326.667 151.468 328.6 153.734 328.6C155.468 328.6 157.601 327.467 160.134 325.2C162.801 322.8 165.534 319.733 168.334 316C171.134 312.133 173.934 307.8 176.734 303C179.668 298.2 182.334 293.333 184.734 288.4C185.134 287.467 185.868 286.667 186.934 286C188.134 285.2 189.401 284.8 190.734 284.8C192.468 284.8 193.068 285.333 192.534 286.4C190.668 289.867 189.001 293.133 187.534 296.2C186.068 299.133 184.868 302.067 183.934 305C183.001 307.933 182.268 310.933 181.734 314C181.334 317.067 181.134 320.4 181.134 324C181.134 328.267 182.334 330.4 184.734 330.4C185.801 330.4 187.001 329.867 188.334 328.8C189.668 327.6 191.001 326.067 192.334 324.2C192.734 323.933 193.134 323.933 193.534 324.2C193.934 324.467 194.001 324.933 193.734 325.6C191.868 328.4 189.668 330.867 187.134 333C184.734 335 182.401 336 180.134 336C178.401 336 176.934 335.133 175.734 333.4C174.534 331.667 173.934 329.333 173.934 326.4C173.934 323.2 174.201 319.8 174.734 316.2C175.401 312.467 176.401 308.733 177.734 305C175.201 309.933 172.534 314.333 169.734 318.2C166.934 321.933 164.201 325.133 161.534 327.8C159.001 330.467 156.601 332.533 154.334 334C152.068 335.333 150.201 336 148.734 336ZM251.9 323.2C252.3 322.933 252.7 322.933 253.1 323.2C253.5 323.467 253.633 323.867 253.5 324.4C251.233 327.467 248.7 330.2 245.9 332.6C243.233 334.867 240.7 336 238.3 336C234.167 336 232.1 333.333 232.1 328C232.1 323.467 232.9 318.467 234.5 313C236.1 307.4 238.3 301.8 241.1 296.2C241.633 295.267 241.9 294.333 241.9 293.4C241.9 291.933 241.233 291.2 239.9 291.2C234.967 291.2 229.5 294.6 223.5 301.4C217.633 308.2 212.167 318.867 207.1 333.4C206.833 334.2 206.1 334.867 204.9 335.4C203.7 335.8 202.567 336 201.5 336C200.033 336 199.5 335.4 199.9 334.2C202.167 328.467 204.5 322 206.9 314.8C209.433 307.6 211.633 300.467 213.5 293.4C214.033 290.867 213.567 289.6 212.1 289.6C210.767 289.6 209.433 290.267 208.1 291.6C206.767 292.933 205.367 294.667 203.9 296.8C203.633 297.067 203.3 297 202.9 296.6C202.633 296.2 202.567 295.8 202.7 295.4C204.167 293.133 206.167 290.8 208.7 288.4C211.233 286 213.967 284.8 216.9 284.8C220.233 284.8 221.367 287.067 220.3 291.6C219.767 294.533 219.033 297.667 218.1 301C217.167 304.2 216.167 307.4 215.1 310.6C216.967 307 219.167 303.6 221.7 300.4C224.233 297.2 226.833 294.467 229.5 292.2C232.3 289.933 235.033 288.133 237.7 286.8C240.5 285.467 243.1 284.8 245.5 284.8C247.1 284.8 248.3 285.2 249.1 286C250.033 286.8 250.5 287.733 250.5 288.8C250.5 290.533 250.1 292.267 249.3 294C246.5 299.067 244.1 304.4 242.1 310C240.233 315.467 239.3 320.533 239.3 325.2C239.3 328.533 240.367 330.2 242.5 330.2C245.3 330.2 248.433 327.867 251.9 323.2ZM298.903 282C299.303 281.733 299.703 281.8 300.103 282.2C300.503 282.467 300.57 282.867 300.303 283.4C299.236 285 297.903 286.467 296.303 287.8C294.703 289 292.703 289.533 290.303 289.4C291.503 291.4 292.103 294 292.103 297.2C292.103 300.267 291.636 303.067 290.703 305.6C289.77 308.133 288.703 310.533 287.503 312.8C286.303 315.067 285.036 317.2 283.703 319.2C282.503 321.2 281.503 323.267 280.703 325.4C280.036 327.533 279.703 329.733 279.703 332C279.836 334.133 280.636 336.533 282.103 339.2C283.303 341.467 284.37 343.467 285.303 345.2C286.37 347.067 287.236 348.8 287.903 350.4C288.703 352.133 289.236 353.867 289.503 355.6C289.903 357.333 290.103 359.2 290.103 361.2C290.103 364.4 289.436 367.4 288.103 370.2C286.77 373.133 284.836 375.667 282.303 377.8C279.77 380.067 276.703 381.8 273.103 383C269.503 384.333 265.436 385 260.903 385C256.236 385 252.036 384.333 248.303 383C244.57 381.667 241.436 379.867 238.903 377.6C236.236 375.467 234.236 372.933 232.903 370C231.57 367.2 230.903 364.267 230.903 361.2C230.903 357.2 232.37 353.667 235.303 350.6C238.103 347.667 242.17 345.467 247.503 344C248.17 344 248.636 344.2 248.903 344.6C249.036 345.133 248.903 345.6 248.503 346C245.703 347.067 243.436 348.667 241.703 350.8C239.97 352.933 239.103 355.8 239.103 359.4C239.103 366.2 241.436 371.667 246.103 375.8C250.77 379.933 256.903 382 264.503 382C270.903 382 275.636 380.333 278.703 377C281.77 373.8 283.303 369.6 283.303 364.4C283.303 361.333 282.836 358.6 281.903 356.2C280.97 353.8 279.57 351.067 277.703 348C275.17 343.733 274.036 339.667 274.303 335.8C274.703 331.8 276.103 327.667 278.503 323.4C278.77 322.867 279.036 322.4 279.303 322C279.703 321.467 280.036 320.867 280.303 320.2C278.836 321.8 277.103 323.2 275.103 324.4C273.236 325.6 271.636 326.2 270.303 326.2C263.77 326.2 260.503 321.933 260.503 313.4C260.503 310.6 261.036 307.533 262.103 304.2C263.17 300.867 264.636 297.8 266.503 295C268.503 292.067 270.77 289.667 273.303 287.8C275.97 285.933 278.903 285 282.103 285C286.77 285 290.37 284.867 292.903 284.6C295.436 284.2 297.436 283.333 298.903 282ZM282.903 315.4C283.703 313.533 284.37 311.6 284.903 309.6C285.436 307.6 285.703 305.6 285.703 303.6C285.703 299.733 285.036 296.733 283.703 294.6C282.503 292.333 280.503 291.2 277.703 291.2C274.503 291.2 271.77 292.8 269.503 296C267.37 299.2 266.303 303.733 266.303 309.6C266.303 313.467 266.903 316.267 268.103 318C269.436 319.733 271.37 320.6 273.903 320.6C275.37 320.6 276.97 320.133 278.703 319.2C280.436 318.267 281.836 317 282.903 315.4Z"
          fill="white"
        />
      </svg>
    </motion.div>
  );
}

export default Logo;
