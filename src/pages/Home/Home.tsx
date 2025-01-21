import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CenteredTableCell = styled(TableCell)({
  textAlign: "center",
  verticalAlign: "middle",
  border: "1px solid rgba(224, 224, 224, 1)",
  fontWeight: "bold",
});

const CenteredTableCellItalicized = styled(TableCell)({
  textAlign: "center",
  verticalAlign: "middle",
  border: "1px solid rgba(224, 224, 224, 1)",
  fontStyle: "italic",
});

function Home() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableRow>
            <CenteredTableCell>Tier</CenteredTableCell>
            <CenteredTableCell>Level</CenteredTableCell>
            <CenteredTableCell colSpan={8}>League</CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>Professional (Tier 1)</CenteredTableCell>
            <CenteredTableCell>1</CenteredTableCell>
            <CenteredTableCell colSpan={8}>
              Canadian Premier League
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell rowSpan={3}>Pro-am (Tier 3)</CenteredTableCell>
            <CenteredTableCell>2</CenteredTableCell>
            <CenteredTableCell colSpan={4}>
              League1 British Columbia
            </CenteredTableCell>
            <CenteredTableCell>League1 Alberta</CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={3}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell colSpan={2}>
              League1 Ontario Premier
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>3</CenteredTableCell>
            <CenteredTableCellItalicized colSpan={5} rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell colSpan={2}>
              League1 Ontario Championship
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>4</CenteredTableCell>
            <CenteredTableCell colSpan={2}>League2 Ontario</CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell rowSpan={6}>Amateur</CenteredTableCell>
            <CenteredTableCell>5</CenteredTableCell>
            <CenteredTableCell>
              Vancouver Island Soccer League Division 1
            </CenteredTableCell>
            <CenteredTableCell>
              Vancouver Metro Soccer League Premier
            </CenteredTableCell>
            <CenteredTableCell>Pacific Coast Soccer League</CenteredTableCell>
            <CenteredTableCell>
              Fraser Valley Soccer League Premier
            </CenteredTableCell>
            <CenteredTableCell>Alberta Major Soccer League</CenteredTableCell>
            <CenteredTableCell>
              Manitoba Major Soccer League Premier
            </CenteredTableCell>
            <CenteredTableCell colSpan={2}>
              Ontario Soccer League Provincial Elite
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>6</CenteredTableCell>
            <CenteredTableCell>
              Vancouver Island Soccer League Division 2
            </CenteredTableCell>
            <CenteredTableCell>
              Vancouver Metro Soccer League Division 1
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={4}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Fraser Valley Soccer League Division 1
            </CenteredTableCell>
            <CenteredTableCell>
              Alberta Provincial Championships Major
            </CenteredTableCell>
            <CenteredTableCell>
              Manitoba Major Soccer League Division 1
            </CenteredTableCell>
            <CenteredTableCell>
              Ontario Soccer League Provincial West
            </CenteredTableCell>
            <CenteredTableCell>
              Ontario Soccer League Provincial East
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>7</CenteredTableCell>
            <CenteredTableCell>
              Vancouver Island Soccer League Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Vancouver Metro Soccer League Division 2
            </CenteredTableCell>
            <CenteredTableCell>
              Fraser Valley Soccer League Division 2
            </CenteredTableCell>
            <CenteredTableCell>
              Alberta Provincial Championships Premier
            </CenteredTableCell>
            <CenteredTableCell>
              Manitoba Major Soccer League Division 2
            </CenteredTableCell>
            <CenteredTableCell>
              Ontario Soccer League Regional West
            </CenteredTableCell>
            <CenteredTableCell>
              Ontario Soccer League Regional East
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>8</CenteredTableCell>
            <CenteredTableCell>
              Vancouver Island Soccer League Division 4
            </CenteredTableCell>
            <CenteredTableCell>
              Vancouver Metro Soccer League Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Fraser Valley Soccer League Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Alberta Provincial Championships Tier 1
            </CenteredTableCell>
            <CenteredTableCell>
              Manitoba Major Soccer League Division 3
            </CenteredTableCell>
            <CenteredTableCell colSpan={2}>
              <div>Ontario Soccer League Multijurisdictional West</div>
              <div>Ontario Soccer League Multijurisdictional Central</div>
              <div>Ontario Soccer League Multijurisdictional East</div>
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>9</CenteredTableCell>
            <CenteredTableCell>
              Vancouver Island Soccer League Division 5
            </CenteredTableCell>
            <CenteredTableCell>
              Vancouver Metro Soccer League Division 4
            </CenteredTableCell>
            <CenteredTableCell>
              Fraser Valley Soccer League Division 4
            </CenteredTableCell>
            <CenteredTableCell>
              Alberta Provincial Championships Tier 2
            </CenteredTableCell>
            <CenteredTableCell>
              Manitoba Major Soccer League Division 4
            </CenteredTableCell>
            <CenteredTableCellItalicized colSpan={2} rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
          </TableRow>
          <TableRow>
            <CenteredTableCell>10</CenteredTableCell>
            <CenteredTableCellItalicized colSpan={4}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Alberta Provincial Championships Tier 3
            </CenteredTableCell>
            <CenteredTableCell>
              Manitoba Major Soccer League Division 5
            </CenteredTableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
}

export default Home;
