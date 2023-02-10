import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CardUser = ({ user }) => {
  return (
    <Card variant="elevation" sx={{ minWidth: 400 }}>
      <CardContent style={{ float: "left" }}>
        <div style={{ display: "inline-block", float: "inherit" }}>
          <Avatar
            sx={{ width: 86, height: 86 }}
            alt={user.login}
            src={user.avatar_url}
          />
        </div>
        <div
          style={{
            display: "inline-block",
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          <ul>
            <div>
              <Typography variant="button">
                <a
                  style={{ color: "green", fontSize: 16 }}
                  href={user.html_url}
                >
                  {user.html_url}
                </a>
              </Typography>
            </div>
            <div style={{textAlign:"justify"}}>
            <Typography variant="caption" sx={{ marginTop: 2, fontSize: 14 }}>
              {user.login}
            </Typography>
            </div>
            <div style={{textAlign:"justify"}}>
              <Typography variant="caption" sx={{ marginTop: 2, fontSize: 14 }}>
                {user.id}
              </Typography>
            </div>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
