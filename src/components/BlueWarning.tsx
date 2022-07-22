import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material"

interface Props {
  text: string
  subText?: string
  marginBottom?: number
  color?: string
  children?: React.ReactElement
  withElevation?: boolean
}

export function BlueWarning({
  text,
}: Props): React.ReactElement {

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      style={{
        backgroundColor: "rgb(244, 247, 250)",
        marginBottom: "24px"
      }}
      borderLeft={"3px solid #789DBF;"}
      borderRadius="4px"
      paddingY={1}
      paddingLeft={2}
      paddingRight={3}
    >
      <Box display={"flex"}>
        <Box style={{ paddingTop: 2, paddingRight: 4 }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.99967 12.6673C10.1293 12.6673 12.6663 10.1303 12.6663 7.00065C12.6663 3.87104 10.1293 1.33398 6.99967 1.33398C3.87006 1.33398 1.33301 3.87104 1.33301 7.00065C1.33301 10.1303 3.87006 12.6673 6.99967 12.6673ZM6.99967 13.6673C10.6816 13.6673 13.6663 10.6826 13.6663 7.00065C13.6663 3.31875 10.6816 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6826 3.31778 13.6673 6.99967 13.6673ZM7.66634 6.33398V10.334H6.33301V6.33398H7.66634ZM7.66634 5.00065V3.66732H6.33301V5.00065H7.66634Z"
              fill={"rgb(120, 157, 191)"}
            />
          </svg>
        </Box>
        <Box style={{ marginLeft: 9, marginRight: 16 }}>
          <Typography style={{fontWeight: 400, fontSize: "1rem", color: "#0F2733"}}>{text}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
