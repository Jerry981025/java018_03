package util;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Blob;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import model.MemberBean;
import service.MemberService;
import service.Impl.MemberServiceImpl;

@WebServlet("/RestrieveMemberImageServlet")
public class RestrieveMemberImageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		InputStream is = null;
		OutputStream os = null;
		String fileName = "headshot.png";
		String mimeType;
		Blob blob;
		try {
			String id = request.getParameter("id");
			WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(getServletContext());
			MemberService ms = ctx.getBean(MemberService.class);
			MemberBean mb = ms.findByMId(id);
			if (mb != null) {
				blob = mb.getmPicture();
				if (blob != null) {
					is = blob.getBinaryStream();
				}
			}

			if (is == null) {
				fileName = "NoImage.png";
				is = getServletContext().getResourceAsStream("/images/" + fileName);
			}
			// 由圖片檔的檔名來得到檔案的MIME型態
			mimeType = getServletContext().getMimeType(fileName);
			// 設定輸出資料的MIME型態
			response.setContentType(mimeType);
			// 取得能寫出非文字資料的OutputStream物件
			os = response.getOutputStream();
			// 由InputStream讀取位元組，然後由OutputStream寫出
			int len = 0;
			byte[] bytes = new byte[8192];
			while ((len = is.read(bytes)) != -1) {
				os.write(bytes, 0, len);
			}
			System.out.println("照片處理完畢");
		} catch (SQLException ex) {
			ex.printStackTrace();
			throw new RuntimeException(
					"_00_init.util.RetrieveMemberImageServlet#doGet()發生SQLException: " + ex.getMessage());
		} finally {
			if (is != null)
				is.close();
			if (os != null)
				os.close();

		}
	}
}
