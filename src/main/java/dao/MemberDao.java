package dao;

import java.sql.Connection;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.MemberBean;

public class MemberDao {
	DataSource ds = null;
	
	public MemberDao() {
		try {
			Context context = new InitialContext();
			ds = (DataSource) context.lookup("java:comp/env/jdbc/MyDB");
		} catch (NamingException e) {
			throw new RuntimeException(e.getMessage());
		}
	}
	
	private static final String SELECT_MEMBER_BYMACCOUNT = "Select * From member Where MId = ?";
	public MemberBean findByMId(String MId) {
		MemberBean mb = null;
		try {Connection conn = ds.getConnection();
			PreparedStatement ps = conn.prepareStatement(SELECT_MEMBER_BYMACCOUNT);
			ps.setString(1, MId);
			try (ResultSet rs = ps.executeQuery()){
				if(rs.next()) {
					mb = new MemberBean();
					mb.setmId(rs.getInt("MId"));
					mb.setmAccount(rs.getString("MAccount"));
					mb.setmPassword(rs.getString("MPassword"));
					mb.setmFirstName(rs.getString("MFirstName"));
					mb.setmLastName(rs.getString("MLastName"));
					mb.setmEmail(rs.getString("MEmail"));
					mb.setmAddress(rs.getString("MAddress"));
					mb.setmBirthday(rs.getDate("MBirth"));
					mb.setmPhone(rs.getString("MPhone"));
					mb.setmBank(rs.getString("MBank"));
					mb.setmEarning(rs.getString("MEarning"));
					mb.setmRank(rs.getString("MRank"));
					mb.setmCellphone(rs.getString("MCellphone"));
					mb.setmPicture(rs.getBlob("MPicture"));
				}
				System.out.println(mb.toString());
			}
		} catch (SQLException e) {
			throw new RuntimeException(e.getMessage());
		}
		return mb;
	}
}
