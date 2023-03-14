import {
  Box,
  Divider,
  IconButton,
  InputBase,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { states } from '../../data/data';

import MaxWidthWrapper from '../common/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from '../../store';
import { foodItemType } from '../../types/constants/foodItem.type';

interface CoverImageProps {
  cartData: any | undefined
  logoutHandler : ()=>void
}



const CoverImage: React.FC<CoverImageProps> = ({ cartData,logoutHandler }) => {
  let counter = 0;
  let cartDataItems = useSelector((state: any) => state.cartItemSlice.cartItems);

  cartData?.map((count: any) => {
    counter += count.quantity;
    return count;
  });

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: {
            xl: '543px',
            lg: '423px',
            md: '300px',
            sm: '250px',
            xs: '150px'
          },
          backgroundImage: `url("images/Rectangle 1.png")`,
          backgroundSize: 'cover'
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: '0px',
            width: '100%',
            height: {
              xl: '543px',
              lg: '423px',
              md: '300px',
              sm: '250px',
              xs: '150px'
            },
            background: 'rgba(0, 0, 0, 0.4)'
          }}></Box>
        <MaxWidthWrapper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              top: '0px',
              width: '100%'
            }}>
            <Box
              sx={{
                fontSize: {
                  xl: '24px',
                  md: '20px',
                  xs: '12px'
                },
                marginTop: {
                  sm: '20px',
                  xs: '5px'
                }
              }}>
              <Link
                href="/"
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '30px',
                  textTransform: 'capitalize',
                  color: '#FFC300',
                  textDecoration: 'none'
                }}>
                NoodleTown
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: {
                  md: '150px',
                  sm: '110px',
                  xs: '45px'
                },
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Box
                sx={{
                  fontSize: {
                    xl: '24px',
                    md: '20px',
                    xs: '12px'
                  },
                  marginTop: '20px'
                }}>
                <Link
                  href="/restaurants"
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    color: '#ffffff',
                    textDecoration: 'none'
                  }}>
                  Menu
                </Link>
              </Box>
              <Box
                sx={{
                  width: {
                    xl: '40px',
                    md: '25px',
                    sm: '20px',
                    xs: '20px'
                  },
                  height: {
                    xl: '40px',
                    md: '30px',
                    sm: '25px',
                    xs: '20px'
                  }
                }}>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: {
                      xl: '14px',
                      sm: '13px',
                      xs: '8px'
                    },
                    width: {
                      xl: '25px',
                      xs: '15px'
                    },
                    height: {
                      md: '20px',
                      xs: '15px'
                    },
                    marginLeft: '5px',
                    lineHeight: {
                      lg: '18px',
                      md: '18px',
                      xs: '15px'
                    },
                    color: '#FFFFFF',
                    textAlign: 'center',
                    background: '#FFA500',
                    borderRadius: '15px'
                  }}>
                  {counter}
                </Typography>
                <Link href="/cart">
                  <Image
                    style={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '13px',
                      color: 'black'
                    }}
                    src="/images/Group 6.png"
                    width={25}
                    height={20}
                    alt="cart"
                  />
                </Link>
              </Box>
              <Box sx={{
                 marginTop: '20px',
                 cursor:'pointer'
              }}
              onClick={() => {
                logoutHandler()
              }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '20px',
                    color: '#FFC300',
                    fontSize: {
                      xl: '24px',
                      md: '20px',
                      xs: '16px'
                    }
                  }}> LOGOUT</Typography>
              </Box>
            </Box>

          </Box>
        </MaxWidthWrapper>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            position: 'relative',
            top: {
              xl: '250px',
              lg: '165px',
              md: '105px',
              sm: '100px',
              xs: '65px'
            },
            gap: { xl: '65px', lg: '50px', md: '30px', sm: '20px', xs: '10px' }
          }}>
          <Box
            sx={{
              zIndex: 1
            }}>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: {
                  xl: '54px',
                  lg: '44px',
                  md: '30px',
                  sm: '24px',
                  xs: '14px'
                },
                lineHeight: {
                  lg: '72px',
                  md: '65px',
                  sm: '30px',
                  xs: '10px'
                },
                textTransform: 'uppercase',
                color: '#ffffff'
              }}>
              NOODLETOWN
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {
                  xl: '24px',
                  lg: '22px',
                  md: '18px',
                  sm: '16px',
                  xs: '12px'
                },
                lineHeight: '30px',
                textTransform: 'capitalize',
                color: '#ffffff',
                textAlign: 'center'
              }}>
              discover best food around you
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              zIndex: 1,
              width: {
                xl: '642px',
                lg: '600px',
                md: '450px',
                sm: '400px',
                xs: '200px'
              },
              height: {
                lg: '65px',
                md: '50px',
                sm: '44px',
                xs: '25px'
              },
              background: '#D9D9D9',
              borderRadius: '8px'
            }}>
            <TextField
              sx={{
                width: {
                  sm: '108px',
                  xs: '390px'
                },
                textAlign: 'center',
                margin: {
                  sm: '10px 10px',
                  xs: '2px 10px'
                }
              }}
              id="standard-select-currency"
              select
              defaultValue="Surat"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: {
                    md: '20px',
                    sm: '18px',
                    xs: '10px'
                  }
                }
              }}>
              {states.map(option => (
                <MenuItem sx={{ fontSize: '12px' }} key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Divider
              sx={{
                width: {
                  sm: '18px',
                  xs: '10px'
                },
                height: '0px',
                marginTop: {
                  lg: '30px',
                  md: '25px',
                  sm: '20px',
                  xs: '12px'
                },
                border: '1px solid #000000',
                transform: 'rotate(90deg)'
              }}
              orientation="vertical"
              flexItem
            />
            <IconButton type="button" aria-label="search">
              <SearchIcon
                sx={{
                  width: {
                    sm: '24px',
                    xs: '12px'
                  },
                  paddingLeft: {
                    lg: '60px',
                    md: '10px',
                    sm: '5px',
                    xs: '0px'
                  }
                }}
              />
            </IconButton>
            <InputBase
              sx={{
                width: '370px',
                fontSize: {
                  xl: '22px',
                  lg: '20px',
                  md: '14px',
                  sm: '10px',
                  xs: '10px'
                },
                paddingRight: '10px'
              }}
              placeholder="search for restraunt, cuisine, place"
              inputProps={{
                'aria-label': 'search google maps',
                style: { textOverflow: 'ellipsis' }
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoverImage;
