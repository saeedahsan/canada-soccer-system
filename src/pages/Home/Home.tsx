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
            <CenteredTableCell colSpan={18}>League</CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>Professional (Tier 1)</CenteredTableCell>
            <CenteredTableCell>1</CenteredTableCell>
            <CenteredTableCell colSpan={18}>
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
            <CenteredTableCell colSpan={9}>Ligue1 Québec</CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={3}>
              No leagues at this level
            </CenteredTableCellItalicized>
          </TableRow>
          <TableRow>
            <CenteredTableCell>3</CenteredTableCell>
            <CenteredTableCellItalicized colSpan={5} rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell colSpan={2}>
              League1 Ontario Championship
            </CenteredTableCell>
            <CenteredTableCell colSpan={9}>Ligue2 Québec</CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>4</CenteredTableCell>
            <CenteredTableCell colSpan={2}>League2 Ontario</CenteredTableCell>
            <CenteredTableCell colSpan={9}>Ligue3 Québec</CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell rowSpan={7}>Amateur</CenteredTableCell>
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
            <CenteredTableCell>
              Lac St-Louis Development League Division 1
            </CenteredTableCell>
            <CenteredTableCell colSpan={3}>
              Ligue Laval-Laurentides-Lanaudière-Mauricie
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de développement Concordia Division 1
            </CenteredTableCell>
            <CenteredTableCell colSpan={2}>
              Ligue interrégioanle Zone 2 Division 1
            </CenteredTableCell>
            <CenteredTableCell colSpan={2}>
              Ligue interrégionale Québec-Est Division 1
            </CenteredTableCell>
            <CenteredTableCell>
              New Brunswick Premier Soccer League
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
            <CenteredTableCellItalicized rowSpan={6}>
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
            <CenteredTableCell>
              Lac St-Louis Development League Division 2
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer Laurentides Division 1
            </CenteredTableCell>
            <CenteredTableCell>Ligue Lanaudière</CenteredTableCell>
            <CenteredTableCell>
              Ligue Mauricienne de soccer Division 1
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de développement Concordia Division 2
            </CenteredTableCell>
            <CenteredTableCell colSpan={2}>
              Ligue interrégioanle Zone 2 Division 2
            </CenteredTableCell>
            <CenteredTableCell colSpan={2}>
              Ligue interrégionale Québec-Est Division 2
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={6}>
              No leagues at this level
            </CenteredTableCellItalicized>
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
            <CenteredTableCell>
              Lac St-Louis Development League Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer Laurentides Division 2
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={5}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Ligue Mauricienne de soccer Division 2
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de développement Concordia Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer régionale Rive-Sud Division 1
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de développement de soccer extérieur ARS Estrie Division 1
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer Saguenay Lac Saint-Jean
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer Québec Métro Senior Division 1
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
            <CenteredTableCell>
              Lac St-Louis Development League Division 4
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={4}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Ligue Mauricienne de soccer Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de développement Concordia Division 4
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer régionale Rive-Sud Division 2
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de développement de soccer extérieur ARS Estrie Division 2
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={4}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Ligue de soccer Québec Métro Senior Division 2
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
            <CenteredTableCellItalicized colSpan={2} rowSpan={3}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Lac St-Louis Development League Division 5
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={3}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Ligue de développement Concordia Division 5
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer régionale Rive-Sud Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de développement de soccer extérieur ARS Estrie Division 3
            </CenteredTableCell>
            <CenteredTableCell>
              Ligue de soccer Québec Métro Senior Division 3
            </CenteredTableCell>
          </TableRow>
          <TableRow>
            <CenteredTableCell>10</CenteredTableCell>
            <CenteredTableCellItalicized colSpan={2} rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCellItalicized rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Alberta Provincial Championships Tier 3
            </CenteredTableCell>
            <CenteredTableCell>
              Manitoba Major Soccer League Division 5
            </CenteredTableCell>
            <CenteredTableCell>
              Lac St-Louis Development League Division 6
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Ligue de soccer régionale Rive-Sud Division 4
            </CenteredTableCell>
            <CenteredTableCellItalicized rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCellItalicized rowSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
          </TableRow>
          <TableRow>
            <CenteredTableCell>11</CenteredTableCell>
            <CenteredTableCellItalicized colSpan={2}>
              No leagues at this level
            </CenteredTableCellItalicized>
            <CenteredTableCell>
              Lac St-Louis Development League Division 7
            </CenteredTableCell>
            <CenteredTableCellItalicized>
              No leagues at this level
            </CenteredTableCellItalicized>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
}

export default Home;
