import { useHistory } from "react-router-dom";
import { Box, Button, useTheme } from "@material-ui/core";

const Landing = () => {
  const { push } = useHistory();
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      textAlign="center"
      height="600px"
      flexGrow={1}
    >
      <Box>
        {/* RAM Logo */}
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="250px"
          viewBox="0 0 500.000000 387.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,387.000000) scale(0.100000,-0.100000)"
            fill={theme.palette.primary.main}
            stroke="none"
          >
            <path
              d="M960 3848 c-36 -3 -83 -13 -105 -21 -80 -30 -242 -105 -285 -132 -66
-42 -145 -120 -195 -194 -25 -36 -70 -97 -100 -136 -72 -91 -138 -219 -170
-331 -14 -49 -37 -123 -52 -164 -20 -59 -26 -97 -28 -180 -1 -58 -5 -125 -9
-150 -4 -25 -2 -70 4 -100 5 -30 14 -103 20 -161 12 -138 45 -239 133 -412 79
-156 178 -281 277 -350 168 -117 208 -132 336 -125 200 10 351 155 409 393 14
55 16 95 12 185 -7 128 -22 189 -73 290 -18 37 -34 71 -34 75 0 3 35 -26 79
-65 43 -39 100 -88 128 -108 111 -82 101 -64 108 -192 18 -332 73 -472 293
-745 148 -183 202 -301 252 -559 59 -297 97 -390 206 -506 112 -118 249 -169
405 -149 104 13 170 48 259 136 122 122 158 209 220 519 50 258 104 376 252
559 220 273 275 413 293 745 7 128 -3 110 108 192 28 20 85 69 128 108 44 39
79 68 79 65 0 -4 -16 -38 -34 -75 -51 -101 -66 -162 -73 -290 -6 -135 8 -211
64 -329 45 -94 115 -166 206 -211 57 -28 83 -34 151 -38 128 -7 168 8 336 125
99 69 198 194 277 350 88 173 121 274 133 412 6 58 15 131 20 161 6 30 8 75 4
100 -4 25 -8 92 -9 150 -2 83 -8 121 -28 180 -15 41 -38 115 -52 164 -32 112
-98 240 -170 331 -30 39 -76 100 -101 137 -89 131 -169 190 -399 292 -119 53
-153 58 -332 57 -132 -1 -173 -5 -215 -20 -29 -11 -83 -21 -120 -24 -48 -3
-86 -14 -132 -36 -36 -17 -70 -31 -76 -31 -21 0 -86 -39 -132 -79 -25 -23 -51
-41 -58 -41 -46 0 -246 -175 -280 -246 -12 -24 -26 -44 -31 -44 -21 0 -98 -84
-117 -128 -12 -26 -48 -76 -81 -111 -33 -35 -63 -72 -66 -82 -12 -37 -168 -37
-180 0 -3 10 -33 47 -66 82 -33 35 -69 85 -81 111 -19 44 -96 128 -117 128 -5
0 -19 20 -31 44 -34 71 -234 246 -280 246 -7 0 -33 18 -58 41 -46 40 -111 79
-132 79 -6 0 -40 14 -76 31 -46 22 -84 33 -132 36 -37 3 -92 13 -122 24 -60
20 -244 29 -360 17z m285 -77 c18 -7 17 -9 -13 -25 -45 -23 -129 -110 -177
-181 -40 -61 -85 -170 -85 -206 0 -17 -4 -19 -22 -12 -30 10 -134 10 -176 0
l-34 -9 18 34 c69 135 260 349 345 388 45 20 108 25 144 11z m2664 -13 c91
-44 247 -217 337 -372 l28 -49 -25 7 c-44 14 -134 18 -171 8 l-36 -10 -6 42
c-17 105 -139 284 -236 347 -49 31 -51 34 -29 40 46 13 93 9 138 -13z m-2994
-70 c-90 -92 -144 -174 -185 -288 -26 -71 -31 -77 -82 -107 -68 -40 -150 -113
-179 -159 -12 -19 -23 -33 -25 -31 -8 8 58 182 103 272 108 215 216 339 326
374 34 11 76 20 93 20 31 1 30 0 -51 -81z m3221 61 c57 -18 77 -30 129 -82 71
-72 120 -144 191 -282 50 -95 119 -273 110 -282 -2 -2 -13 12 -25 31 -29 47
-114 122 -179 159 -30 16 -56 37 -59 46 -47 158 -142 304 -258 399 l-40 32 32
0 c17 0 61 -9 99 -21z m-2692 -22 c17 -13 15 -16 -26 -40 -100 -59 -229 -227
-267 -351 l-16 -52 -30 17 c-16 10 -49 21 -72 25 -24 3 -43 11 -43 16 0 6 11
32 25 59 105 209 342 389 429 326z m2254 -16 c112 -58 223 -171 287 -292 19
-37 35 -72 35 -78 0 -6 -12 -11 -27 -11 -16 0 -48 -9 -72 -20 -24 -11 -44 -20
-46 -20 -1 0 -7 19 -14 43 -36 120 -168 295 -267 353 -24 14 -44 28 -44 30 0
8 44 23 68 23 12 1 48 -12 80 -28z m-2048 -72 l43 -31 -54 -29 c-110 -60 -235
-212 -289 -350 l-27 -69 -21 23 c-12 13 -49 36 -82 52 -33 16 -60 33 -60 39 0
6 19 45 42 86 79 144 279 310 373 310 20 0 48 -12 75 -31z m1846 15 c93 -39
211 -141 281 -244 45 -66 75 -129 67 -141 -4 -6 -26 -20 -51 -31 -24 -10 -59
-32 -77 -48 l-33 -29 -16 52 c-41 129 -192 317 -298 369 l-52 25 43 32 c48 35
80 38 136 15z m-2901 -73 c-49 -67 -130 -241 -154 -331 -12 -41 -21 -99 -21
-128 0 -37 -6 -62 -19 -80 -24 -35 -70 -126 -86 -172 l-13 -35 -7 48 c-25 163
59 454 178 614 41 55 128 132 149 133 5 0 -8 -22 -27 -49z m3846 13 c55 -40
128 -133 169 -214 70 -140 120 -370 105 -487 l-7 -58 -21 55 c-11 30 -37 83
-57 116 -32 52 -38 73 -42 135 -8 120 -87 321 -173 441 -19 26 -32 48 -29 48
4 0 28 -16 55 -36z m-2643 -48 c28 -14 79 -64 71 -69 -2 -1 -20 -10 -39 -19
-58 -26 -135 -94 -193 -171 -62 -80 -124 -194 -133 -245 -4 -18 -10 -32 -14
-30 -5 2 -38 32 -75 67 l-67 64 24 51 c58 127 192 271 309 334 68 36 79 38
117 18z m1538 -22 c113 -64 227 -188 293 -315 l34 -65 -64 -61 c-35 -34 -68
-61 -74 -61 -5 0 -19 27 -31 58 -51 141 -198 322 -301 371 -29 13 -51 29 -49
34 1 6 22 25 46 43 49 38 75 37 146 -4z m-1339 -152 c18 -24 33 -47 33 -52 0
-8 -134 -169 -235 -283 -33 -37 -91 -95 -129 -128 l-69 -60 -24 23 c-14 13
-36 41 -49 64 -23 40 -24 42 -8 80 59 140 212 306 349 377 67 36 92 32 132
-21z m1153 17 c129 -68 259 -206 329 -347 l32 -63 -25 -42 c-13 -23 -35 -52
-48 -65 l-24 -22 -66 57 c-74 64 -156 153 -269 288 -112 136 -104 121 -84 152
30 47 58 73 78 73 10 0 45 -14 77 -31z m-2223 -71 c4 -7 9 -69 9 -138 1 -83 7
-141 17 -175 9 -27 14 -51 12 -53 -2 -2 -24 -7 -48 -9 -44 -5 -45 -4 -86 46
-55 71 -101 171 -108 235 l-6 53 44 27 c34 20 57 26 101 26 35 0 60 -5 65 -12z
m3296 1 c41 -21 67 -52 67 -79 0 -64 -90 -245 -143 -289 -16 -12 -90 -11 -103
2 -2 2 3 24 12 48 12 32 17 80 18 177 1 106 4 135 16 142 21 13 107 12 133 -1z
m-3117 -51 c25 -24 25 -27 14 -89 -12 -66 -7 -180 11 -227 13 -33 8 -36 -39
-21 -36 11 -43 18 -72 80 -35 77 -63 212 -53 260 6 31 6 31 60 27 41 -4 61
-11 79 -30z m2934 -36 c0 -117 -61 -285 -108 -297 -15 -3 -34 -8 -43 -11 -14
-4 -14 2 -1 63 9 45 12 92 7 138 -12 134 -13 127 24 152 23 15 48 23 77 23
l44 0 0 -68z m-3348 -38 c-6 -82 19 -179 60 -235 16 -22 27 -43 24 -46 -3 -3
-25 -8 -49 -10 -79 -9 -197 37 -256 100 l-23 25 28 54 c49 91 141 167 214 177
3 1 4 -29 2 -65z m1438 30 c76 -87 76 -134 1 -241 -78 -111 -216 -219 -357
-279 l-67 -28 -29 34 c-16 19 -40 56 -54 82 l-24 48 37 24 c92 58 237 179 338
282 61 62 113 113 116 113 4 1 21 -15 39 -35z m1039 -205 c53 -45 128 -104
168 -132 l72 -51 -26 -47 c-14 -26 -38 -62 -53 -80 l-27 -33 -69 29 c-156 66
-325 210 -383 326 -17 34 -31 72 -31 84 0 27 51 107 81 128 22 16 24 15 97
-64 41 -44 118 -116 171 -160z m1237 201 c50 -28 103 -89 139 -159 17 -33 16
-33 -12 -63 -15 -16 -56 -43 -91 -60 -52 -26 -77 -32 -132 -32 -37 -1 -72 2
-76 7 -4 4 2 17 14 30 41 44 65 116 70 214 5 108 8 110 88 63z m-3200 0 c8 0
33 -17 55 -37 l42 -38 -9 -80 c-4 -44 -7 -108 -6 -142 1 -35 -2 -63 -7 -63 -4
0 -23 10 -42 23 -43 28 -77 123 -86 237 -7 88 -1 115 23 106 9 -3 22 -6 30 -6z
m2654 -53 c0 -72 -17 -162 -42 -220 -16 -36 -31 -53 -60 -68 l-40 -20 7 40 c4
22 1 82 -6 132 -11 78 -11 94 2 117 20 36 76 72 110 72 28 0 29 -1 29 -53z
m-3615 -99 c1 -121 4 -152 23 -205 l22 -61 -25 -65 c-13 -36 -27 -89 -31 -118
l-7 -53 -24 55 c-73 165 -71 358 7 523 18 37 32 66 33 66 1 0 2 -64 2 -142z
m4600 -53 c31 -120 15 -275 -40 -390 -21 -45 -23 -47 -24 -21 -1 15 -14 68
-31 118 -27 82 -29 91 -16 117 25 48 39 159 34 270 l-5 106 33 -70 c18 -38 40
-97 49 -130z m-3442 25 c47 -55 51 -83 21 -149 -13 -29 -24 -60 -24 -68 0 -25
-24 -8 -44 31 -13 26 -20 69 -24 143 -5 104 -5 105 16 94 11 -6 36 -29 55 -51z
m2274 -42 c-6 -95 -20 -152 -42 -176 -10 -11 -17 -4 -39 43 -40 88 -35 127 27
193 53 55 61 46 54 -60z m-1390 6 c62 -51 77 -84 70 -160 -11 -118 -86 -242
-202 -334 -129 -103 -267 -142 -332 -94 -34 26 -90 133 -102 195 l-8 46 52 12
c163 37 385 198 447 325 12 25 24 46 26 46 3 0 25 -16 49 -36z m509 -6 c55
-122 262 -277 433 -324 69 -20 71 -25 46 -110 -24 -82 -68 -141 -114 -155
-130 -39 -383 116 -466 284 -36 75 -54 170 -41 222 6 24 99 125 116 125 4 0
16 -19 26 -42z m-2325 -44 c48 -50 82 -73 138 -93 l48 -17 -31 -37 c-27 -32
-40 -39 -94 -48 -67 -12 -161 -1 -188 22 -30 25 -2 133 48 187 29 30 38 28 79
-14z m4153 3 c33 -44 56 -99 56 -137 0 -26 -6 -34 -37 -47 -45 -19 -153 -22
-204 -5 -29 10 -79 58 -79 76 0 2 14 7 30 11 39 9 143 78 164 110 22 34 40 31
70 -8z m-3107 -83 l32 -56 -31 -38 c-31 -36 -33 -37 -55 -23 -14 9 -22 23 -19
32 2 9 10 44 16 79 7 34 15 62 19 62 3 -1 21 -26 38 -56z m2032 -6 c7 -35 14
-71 16 -81 2 -10 -6 -22 -18 -28 -18 -10 -25 -7 -54 25 l-34 36 31 45 c16 24
30 48 30 54 0 6 4 11 9 11 4 0 14 -28 20 -62z m-1006 21 c32 -9 37 -14 37 -39
0 -73 72 -212 162 -315 102 -116 311 -236 422 -243 36 -2 72 1 84 7 12 6 52
53 90 104 111 148 286 307 404 368 74 38 209 70 303 72 87 2 90 1 93 -21 2
-16 -35 -81 -124 -215 -102 -154 -147 -211 -227 -290 -54 -54 -101 -96 -104
-93 -3 3 25 38 61 78 140 152 260 331 281 420 9 34 -15 42 -80 28 -92 -21
-143 -70 -278 -262 -58 -84 -87 -114 -186 -199 -38 -33 -47 -70 -32 -139 7
-30 19 -86 28 -125 18 -84 13 -249 -12 -340 -21 -81 -87 -218 -138 -285 -45
-61 -186 -210 -198 -210 -9 0 -35 86 -45 150 -7 44 -8 44 -15 15 -4 -16 -24
-139 -44 -273 -71 -481 -132 -711 -213 -795 -55 -58 -150 -88 -185 -58 -26 21
-30 66 -11 107 16 33 84 94 106 94 18 0 7 -30 -19 -49 -30 -24 -26 -35 10 -26
72 19 145 153 105 193 -16 16 -98 15 -178 -3 -85 -19 -169 -19 -267 0 -94 18
-165 19 -181 3 -40 -40 33 -174 105 -193 36 -9 40 2 10 26 -26 19 -37 49 -19
49 22 0 90 -61 106 -95 20 -42 15 -76 -15 -106 -18 -18 -30 -21 -84 -17 -50 3
-70 10 -100 32 -92 70 -179 371 -225 771 -20 174 -42 291 -59 308 -4 4 -11
-31 -13 -78 -3 -47 -9 -89 -13 -93 -9 -9 -137 125 -194 201 -99 135 -164 299
-180 457 -11 100 -8 133 21 285 29 151 29 153 -87 249 -27 22 -80 89 -127 160
-121 182 -179 235 -273 250 -59 9 -69 -1 -51 -52 29 -81 103 -179 285 -377 70
-77 111 -135 93 -135 -14 0 -146 117 -193 172 -121 141 -312 428 -307 461 2
18 10 23 46 25 117 8 307 -46 415 -118 113 -76 304 -247 367 -329 31 -40 67
-79 80 -87 118 -65 428 111 565 321 44 67 85 171 85 215 0 28 18 40 70 49 3 1
22 -4 43 -10z m-1759 -94 c10 -25 54 -95 98 -156 44 -61 77 -113 74 -116 -3
-3 -28 15 -57 41 -54 49 -161 91 -213 84 -25 -3 -24 -5 50 -132 86 -149 106
-214 107 -341 1 -132 -8 -170 -50 -195 l-34 -20 -53 28 c-57 29 -52 20 -104
167 -25 71 -35 148 -35 275 0 134 1 136 35 206 19 40 51 86 70 103 19 17 46
46 59 66 13 19 26 35 29 35 3 0 13 -20 24 -45z m3495 10 c13 -20 40 -49 59
-66 19 -17 51 -63 70 -103 34 -70 35 -72 35 -206 0 -127 -10 -204 -35 -275
-52 -147 -47 -138 -104 -167 l-53 -28 -34 20 c-42 25 -51 63 -50 195 1 127 21
192 107 341 74 127 75 129 50 132 -52 7 -159 -35 -213 -84 -29 -26 -54 -44
-57 -41 -3 3 30 55 74 116 44 61 88 131 98 156 11 25 21 45 24 45 3 0 16 -16
29 -35z m-2680 -93 c32 -76 31 -77 -34 -28 -22 17 -41 32 -43 32 -2 1 7 18 20
37 12 20 23 35 24 34 1 -1 16 -35 33 -75z m1889 4 c-1 -1 -27 -20 -57 -41
l-53 -38 20 39 c10 21 25 56 32 77 l12 39 25 -37 c14 -20 23 -38 21 -39z
m-3363 -10 c13 -36 39 -88 58 -115 35 -48 36 -50 30 -125 -3 -42 -8 -76 -11
-76 -19 0 -88 132 -107 207 -16 60 -19 122 -9 161 8 30 12 25 39 -52z m4804
-6 c2 -87 -57 -248 -107 -293 -19 -17 -19 -17 -25 60 -4 65 -2 81 12 98 29 34
58 87 82 154 25 71 37 65 38 -19z m-4573 35 c47 -32 106 -48 161 -43 24 2 43
1 43 -2 0 -4 -13 -27 -30 -53 -63 -100 -207 -149 -265 -90 -28 27 -13 124 29
188 9 14 18 25 21 25 2 0 21 -11 41 -25z m4373 -23 c23 -47 34 -105 26 -142
-13 -59 -116 -64 -199 -9 -38 26 -106 108 -106 129 0 3 16 4 36 2 51 -6 134
14 175 42 19 13 37 22 42 19 4 -2 16 -21 26 -41z m-3854 -194 c49 -35 90 -69
93 -75 2 -7 -7 -17 -20 -22 -13 -5 -38 -21 -56 -36 l-32 -27 0 52 c0 42 -3 51
-15 46 -10 -4 -24 11 -45 47 -30 53 -37 77 -21 77 4 0 48 -28 96 -62z m3335
-13 c-26 -45 -35 -54 -46 -44 -12 10 -14 2 -14 -46 l0 -57 -34 30 c-19 17 -44
33 -55 37 -12 3 -21 10 -21 14 0 10 123 102 165 124 17 8 31 11 33 6 2 -5 -11
-34 -28 -64z m-3704 1 c-9 -36 -62 -94 -107 -117 -24 -12 -58 -19 -93 -19 -64
0 -76 13 -76 82 0 59 11 74 40 58 36 -19 139 -15 191 7 24 11 46 19 48 17 2
-2 1 -14 -3 -28z m4117 -10 c37 -5 67 -2 96 7 38 14 42 13 51 -3 15 -29 12
-97 -6 -114 -21 -21 -105 -21 -147 0 -60 30 -117 98 -117 137 0 12 6 12 35 -3
19 -10 59 -21 88 -24z m-4506 -59 c13 -21 38 -46 55 -57 31 -18 31 -19 33
-109 l1 -91 -28 27 c-58 55 -122 234 -103 281 6 15 8 15 13 2 3 -8 16 -32 29
-53z m4812 -25 c-9 -65 -57 -166 -96 -204 l-29 -28 2 91 c2 90 3 91 32 109 33
20 82 85 83 110 0 11 3 9 8 -4 4 -10 4 -44 0 -74z m-3916 -24 c14 -18 34 -52
46 -75 l21 -43 -30 7 c-35 7 -114 -13 -131 -33 -20 -24 -29 -15 -29 29 1 71
44 146 87 147 7 0 23 -15 36 -32z m3061 6 c28 -29 46 -80 46 -132 l0 -34 -35
22 c-19 12 -59 24 -90 27 -30 3 -55 8 -55 10 0 10 35 71 58 101 30 39 41 40
76 6z m-3564 -64 c0 -53 -143 -162 -233 -177 -33 -5 -35 -3 -47 32 -12 38 -10
148 4 162 4 4 17 1 28 -6 12 -8 49 -16 82 -18 50 -4 69 0 106 19 25 13 48 22
53 20 4 -2 7 -16 7 -32z m4121 -7 c46 -4 75 -1 103 11 22 9 41 14 44 11 12
-12 13 -125 2 -160 -12 -36 -13 -37 -49 -30 -91 17 -231 125 -231 178 0 35 9
38 40 15 18 -13 49 -22 91 -25z m-3521 -118 c16 -32 26 -72 28 -114 l5 -64
-48 37 c-45 34 -126 66 -167 66 -23 0 -23 7 5 54 26 45 79 78 122 74 25 -3 34
-11 55 -53z m2898 41 c35 -18 68 -54 81 -87 9 -26 8 -27 -35 -33 -50 -7 -107
-33 -153 -71 l-31 -27 0 45 c0 50 21 126 44 162 19 29 53 32 94 11z m-3798
-106 c6 0 10 -24 10 -55 0 -48 11 -93 46 -180 7 -20 7 -20 -15 0 -44 38 -113
189 -136 293 l-7 33 46 -45 c25 -25 50 -46 56 -46z m4669 10 c-24 -90 -82
-210 -115 -241 -30 -28 -30 -27 1 50 17 40 26 82 26 120 1 51 4 60 24 69 13 6
36 27 51 46 16 19 29 34 31 32 1 -1 -6 -35 -18 -76z m-4368 -15 c-12 -65 -51
-148 -87 -186 -14 -15 -43 -35 -65 -44 -32 -15 -41 -16 -54 -5 -37 31 -70 138
-60 193 6 32 6 32 63 29 65 -4 157 25 187 58 10 11 20 18 22 16 3 -2 0 -29 -6
-61z m4069 6 c31 -14 66 -21 111 -21 64 0 67 -1 72 -27 10 -52 -24 -164 -58
-193 -16 -13 -56 1 -101 35 -40 31 -90 126 -103 199 -6 33 -11 62 -11 65 0 2
10 -5 23 -17 12 -11 42 -30 67 -41z m-3483 -120 c48 -28 53 -40 53 -141 0
-133 -48 -255 -121 -310 l-27 -19 5 42 c2 23 6 53 8 67 7 47 -16 185 -39 236
-13 29 -38 62 -55 75 -98 72 58 116 176 50z m3004 19 c28 -15 23 -37 -15 -70
-66 -59 -108 -221 -89 -347 5 -35 7 -63 3 -63 -13 0 -79 77 -98 115 -40 81
-56 251 -29 305 27 54 168 91 228 60z m-3505 -36 c18 -94 -19 -218 -89 -299
l-34 -39 -35 28 c-39 29 -105 119 -110 149 -2 15 10 24 58 41 33 12 77 33 97
45 39 24 87 79 87 99 0 28 20 9 26 -24z m3844 23 c0 -28 64 -88 132 -121 39
-20 79 -36 89 -36 10 0 20 -4 23 -8 10 -17 -35 -89 -88 -141 l-55 -54 -32 34
c-68 72 -112 212 -95 303 6 34 26 51 26 23z m-3720 -129 c29 -48 35 -128 17
-204 -16 -64 -64 -147 -90 -157 -32 -12 -157 67 -157 98 0 7 27 33 59 58 81
64 121 126 121 189 0 58 20 65 50 16z m3616 -12 c1 -61 41 -125 117 -187 34
-29 63 -55 65 -59 10 -25 -93 -99 -140 -100 -39 0 -93 88 -110 180 -12 70 4
162 33 191 28 28 34 24 35 -25z m-3453 7 c80 -85 122 -305 68 -367 -57 -65
-188 -82 -256 -32 -19 13 -18 15 17 54 80 88 126 212 114 304 -10 75 10 89 57
41z m3302 -68 c0 -79 4 -98 32 -157 17 -37 50 -87 74 -113 40 -44 41 -46 23
-60 -29 -21 -98 -36 -136 -28 -49 9 -106 40 -124 68 -26 40 -16 193 17 265 32
68 76 122 97 118 13 -3 16 -20 17 -93z m-3870 -19 c14 -29 41 -75 61 -101 41
-52 20 -48 -33 7 -32 34 -93 126 -93 140 0 4 9 8 20 8 14 0 27 -16 45 -54z
m4445 46 c0 -14 -61 -106 -93 -140 -52 -54 -71 -57 -31 -5 20 26 48 72 61 101
17 36 30 52 44 52 10 0 19 -4 19 -8z m-4255 -284 l60 -61 -47 33 c-60 42 -107
90 -87 90 8 0 41 -28 74 -62z m4061 33 c-15 -16 -49 -43 -74 -61 l-47 -33 60
61 c33 34 66 62 74 62 10 0 6 -9 -13 -29z m-1938 -1450 l67 -6 -26 -18 c-37
-25 -133 -40 -211 -34 -67 6 -158 37 -158 55 0 5 35 12 78 15 43 3 88 10 102
15 16 6 33 4 52 -5 16 -8 59 -18 96 -22z"
            />
            <path
              d="M1950 2137 c0 -3 21 -18 48 -33 95 -56 220 -195 237 -266 10 -38 25
-25 25 20 -1 86 -87 189 -203 242 -67 30 -107 44 -107 37z"
            />
            <path
              d="M2962 2105 c-81 -38 -164 -111 -193 -167 -18 -35 -26 -108 -13 -121
3 -3 21 25 40 63 39 77 140 180 226 230 74 42 31 39 -60 -5z"
            />
            <path
              d="M3201 1894 c-115 -42 -140 -61 -190 -144 -36 -61 -88 -110 -117 -110
-22 0 -74 51 -74 73 0 14 -3 18 -10 11 -17 -17 8 -80 46 -113 39 -35 86 -41
132 -17 15 7 56 17 92 21 110 12 140 37 175 148 15 45 35 98 46 118 10 21 19
41 19 44 0 9 -23 3 -119 -31z m-3 -130 c-24 -45 -48 -78 -61 -83 -25 -9 -107
-21 -107 -16 0 2 5 15 11 29 10 22 14 23 41 14 44 -16 81 15 88 72 4 31 11 45
25 51 41 16 41 7 3 -67z"
            />
            <path
              d="M1695 1910 c-3 -5 5 -31 18 -57 14 -26 32 -74 41 -106 10 -35 30 -72
49 -93 29 -31 41 -36 119 -49 48 -8 96 -19 107 -24 72 -39 172 29 170 116 l0
28 -10 -25 c-15 -38 -50 -70 -75 -70 -32 0 -91 54 -119 110 -31 61 -81 104
-147 125 -29 10 -74 26 -100 36 -27 11 -50 14 -53 9z m114 -91 c28 -10 31 -15
31 -55 0 -55 30 -80 84 -70 28 5 37 3 45 -13 6 -11 11 -22 11 -24 0 -10 -96 6
-117 19 -17 11 -100 154 -89 154 2 0 17 -5 35 -11z"
            />
            <path
              d="M2694 1718 c9 -63 43 -483 66 -807 10 -156 21 -286 24 -288 12 -13
17 228 7 407 -16 283 -39 478 -77 658 -17 79 -30 98 -20 30z"
            />
            <path
              d="M2296 1578 c-50 -174 -69 -342 -67 -608 2 -306 15 -383 24 -140 7
211 19 358 48 614 11 98 18 181 15 183 -2 2 -11 -20 -20 -49z"
            />
          </g>
        </svg>
      </Box>
      <Button
        onClick={() => push("/agendamanager")}
        variant="contained"
        size="large"
        style={{ textTransform: "capitalize" }}
        color="primary"
      >
        New Agenda
      </Button>
      <Button
        onClick={() => push("/savedagendas")}
        variant="outlined"
        size="large"
        style={{ textTransform: "capitalize" }}
        color="primary"
      >
        Saved Agendas
      </Button>
      <Box display="flex" justifyContent="space-around">
        {/* Planning Poker Logo */}
        <svg viewBox="0 0 1070 126.4" id="planningpoker" width="250px">
          <path
            fill={theme.palette.primary.main}
            d="M47,98.2c17.1,0,29.7-15.5,29.7-36.5c0-20.7-13.7-36-32.3-36c-10.5,0-17.7,4.3-22.6,11.8V27.1H0v98h25.2V86.5  C29.3,94,37,98.2,47,98.2L47,98.2L47,98.2z M38.3,76.9c-5.3,0-10.6-4.6-13-10.8v-12c3.4-4.8,7.2-7.2,12-7.2  c8.2,0,13.8,5.8,13.8,14.6C51,70,45.6,76.9,38.3,76.9L38.3,76.9L38.3,76.9z M85.3,78c0,13,7.5,20.2,20.9,20.2  c6.6,0,14.9-1.7,20.8-4.5l-3.2-20.3c-2.1,1.2-4.8,2-6.9,2c-4.3,0-6.5-2.8-6.5-8V0H85.2v78H85.3z M154.5,98.2  c9.2,0,17.5-4.3,23.7-12.2l0.5,2.5c1.4,6.3,5.8,9.7,14.9,9.7c3.2,0,7.3-0.4,12-1.4V75.6c-4.6-0.3-6.1-1.8-6.1-6.6V55.4  c0-19.7-12.6-29.7-34.8-29.7c-12,0-22.1,2.9-31.4,8.9l7.3,15.7c7.4-4.9,13.8-7.5,21.7-7.5c8.5,0,12,3.2,12,9.7v2.1  c-3.6-1.7-8.6-2.6-14-2.6c-17.7,0-30.1,9.8-30.1,23.9C130.1,88.6,140.5,98.2,154.5,98.2L154.5,98.2L154.5,98.2z M162,80.1  c-4.8,0-8.2-2.8-8.2-6.6c0-4.5,4.6-8,10.8-8c2.8,0,6.8,0.8,9.7,1.8v5.2c0,1.7-1.4,3.6-3.4,4.9C168.5,79.1,165.1,80.1,162,80.1  L162,80.1L162,80.1z M284.2,50.9c0-9.5-2.3-25.2-21.2-25.2c-12,0-21.4,4.1-26.3,11.7V27.1H214v69.8h25.2V57.8c2.3-5.8,7.8-10,12-10  c4.1,0,7.7,2.9,7.7,9.8v39.2h25.2L284.2,50.9L284.2,50.9z M366.6,50.9c0-9.5-2.3-25.2-21.2-25.2c-12,0-21.4,4.1-26.3,11.7V27.1  h-22.7v69.8h25.2V57.8c2.3-5.8,7.8-10,12-10c4.1,0,7.7,2.9,7.7,9.8v39.2h25.2L366.6,50.9L366.6,50.9z M404,96.9V27.1h-25.3v69.8  L404,96.9L404,96.9z M404,21.2V0h-25.3v21.2H404L404,21.2z M486.9,50.9c0-9.5-2.3-25.2-21.2-25.2c-12,0-21.4,4.1-26.3,11.7V27.1  h-22.7v69.8H442V57.8c2.3-5.8,7.8-10,12-10c4.1,0,7.7,2.9,7.7,9.8v39.2h25.2V50.9L486.9,50.9z M525.8,96.9c8.9,0,17.1-3.6,21.1-10.9  v4.5c0,12.5-8.1,17.2-17.2,17.2c-8.1,0-15.7-3.7-20.7-8.5L495.9,113c8.5,8.6,19.2,13.4,34,13.4c25.5,0,42.4-14.2,42.4-36V27h-21.9  v10.3c-4.3-7.5-12.3-11.7-22.3-11.7c-19.1,0-32.5,15.2-32.5,36.1C495.5,81.6,507.6,96.9,525.8,96.9L525.8,96.9L525.8,96.9z   M534.9,76.9c-8,0-13.7-5.8-13.7-14.5c0-8.5,5.4-15.5,12.6-15.5c5.3,0,10.6,4,13.1,10.3v12.5C543.6,74.6,539.9,76.9,534.9,76.9  L534.9,76.9L534.9,76.9z M631.9,98.2c17.1,0,29.7-15.5,29.7-36.5c0-20.7-13.7-36-32.3-36c-10.5,0-17.7,4.3-22.6,11.8V27.1h-21.9v98  H610V86.5C614.1,94,621.7,98.2,631.9,98.2L631.9,98.2L631.9,98.2z M623.1,76.9c-5.3,0-10.6-4.6-13-10.8v-12c3.4-4.8,7.2-7.2,12-7.2  c8.2,0,13.8,5.8,13.8,14.6C635.8,70,630.4,76.9,623.1,76.9L623.1,76.9L623.1,76.9z M704.9,98.2c24.9,0,38.2-17.1,38.2-36.2  c0-19.2-13.2-36.2-38.2-36.2S666.7,42.7,666.7,62C666.7,81.1,680,98.2,704.9,98.2L704.9,98.2L704.9,98.2z M692.6,62  c0-9.2,5.2-14.9,12.3-14.9c7.2,0,12.3,5.7,12.3,14.9c0,9.2-5.2,14.9-12.3,14.9C697.7,76.9,692.6,71.2,692.6,62L692.6,62L692.6,62z   M824.7,96.9l-26.4-39.2l24-30.5h-26.5L777.2,53V0H752v96.9h25.2V77l5.1-5.5L798.1,97h26.6V96.9z M860.1,98.2  c16.9,0,29.1-7.8,34.8-18.9l-21.4-6.1c-1.6,4.3-7.2,7.1-12.6,7.1c-5.8,0-11.7-3.1-12.2-10.5h48.9c0.4-2.1,0.6-5.1,0.6-7.7  c0-19.2-13.2-36.2-38.2-36.2c-24.9,0-38.2,16.9-38.2,37.1C821.9,81.6,835.5,98.2,860.1,98.2L860.1,98.2L860.1,98.2z M848.1,54.5  c0.8-6.8,5.2-10.9,11.5-10.9s10.8,4.1,11.5,10.9H848.1L848.1,54.5z M954,25.9c-0.6-0.1-1.4-0.1-3.2-0.1c-8.3,0-16.2,5.3-21.1,14.6  V27.1h-23.1v69.8h25.2V55.5c3.8-4.9,12.5-6.9,22.1-6.9L954,25.9L954,25.9L954,25.9z M974.1,68.3c6.5,0,11.1,3.1,13.4,7.5l-8.5,2.5  c-1.1-1.7-2.8-2.7-5-2.7c-3.6,0-6.3,2.9-6.3,7.4s2.8,7.5,6.3,7.5c2.2,0,4.2-1.2,5-2.8l8.5,2.6c-2.1,4.4-6.9,7.5-13.4,7.5  c-9.6,0-15.3-7-15.3-14.9C958.7,75.2,964.4,68.3,974.1,68.3L974.1,68.3z M989.5,83.2c0-7.9,5.5-14.9,15.3-14.9  c9.7,0,15.3,7,15.3,14.9c0,7.8-5.5,14.8-15.3,14.8S989.5,91,989.5,83.2L989.5,83.2z M1004.7,90.6c3.6,0,6.3-3.1,6.3-7.4  c0-4.4-2.7-7.4-6.3-7.4s-6.3,3.1-6.3,7.4C998.3,87.6,1001.1,90.6,1004.7,90.6L1004.7,90.6z M1069.3,97.4h-8.7v-16  c0-3.7-1.4-5.3-3.7-5.3s-4.8,2.1-5.8,5.1v16.4h-8.7V81.5c0-3.7-1.4-5.3-3.7-5.3s-4.8,2.1-5.8,5.1v16.4h-8.7V69.1h7.8v4.8  c2.1-3.4,5.8-5.3,10.6-5.3c4.7,0,7.2,2.5,7.9,5.5c2.1-3.5,5.8-5.5,10.3-5.5c7.2,0,8.5,6.1,8.5,10.8L1069.3,97.4L1069.3,97.4z   M951.9,97.6c2.2,0,3.9-1.7,3.9-3.9c0-2.2-1.7-3.9-3.9-3.9s-3.9,1.7-3.9,3.9C948.1,95.8,949.8,97.6,951.9,97.6L951.9,97.6z   M957.5,28.5c0.4-0.7,0.8-1.4,1.4-1.9c0.5-0.5,1.3-0.9,2-1.3c0.7-0.3,1.5-0.5,2.4-0.5s1.6,0.2,2.4,0.5c0.7,0.3,1.4,0.7,2,1.3  c0.5,0.5,1,1.2,1.4,1.9c0.4,0.7,0.5,1.6,0.5,2.5s-0.2,1.8-0.5,2.5c-0.4,0.7-0.8,1.4-1.4,1.9c-0.5,0.5-1.3,0.9-2,1.2  s-1.5,0.5-2.4,0.5s-1.6-0.2-2.4-0.5s-1.4-0.7-2-1.2c-0.5-0.5-1-1.2-1.4-1.9c-0.4-0.7-0.5-1.6-0.5-2.5  C956.9,30.1,957.1,29.3,957.5,28.5L957.5,28.5z M958.9,33c0.3,0.5,0.5,1.1,1,1.5s0.9,0.7,1.4,1s1.2,0.4,1.8,0.4  c0.6,0,1.3-0.1,1.8-0.4s1.1-0.5,1.4-1c0.5-0.5,0.7-0.9,1-1.5c0.3-0.5,0.4-1.3,0.4-1.9s-0.1-1.4-0.4-1.9s-0.5-1.1-1-1.5  s-0.9-0.7-1.4-1s-1.2-0.4-1.8-0.4c-0.6,0-1.3,0.1-1.8,0.4s-1.1,0.5-1.4,1c-0.5,0.5-0.7,0.9-1,1.5c-0.3,0.5-0.4,1.2-0.4,1.9  C958.6,31.8,958.7,32.3,958.9,33L958.9,33L958.9,33z M963.4,27.9c0.8,0,1.4,0.2,1.8,0.5c0.5,0.3,0.6,0.7,0.6,1.4  c0,0.3,0,0.5-0.1,0.7s-0.2,0.4-0.4,0.5c-0.2,0.1-0.4,0.3-0.5,0.3c-0.2,0.1-0.5,0.1-0.6,0.1l1.6,2.7h-1.3l-1.5-2.6h-0.8v2.6h-1.3  v-6.2H963.4L963.4,27.9z M963.3,30.5c0.4,0,0.6-0.1,0.9-0.2c0.2-0.1,0.4-0.4,0.4-0.7c0-0.2,0-0.3-0.1-0.4l-0.3-0.3  c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5h-1.1v1.6h1.2V30.5z"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Landing;
