package model;

import java.io.Serializable;
import java.sql.Blob;
import java.util.Date;

public class MemberBean implements Serializable{
	private static final long serialVersionUID = 1L;
	private Integer mId;   			    		// ObjectId
	private String mAccount;   					// 帳號
	private String mPassword;   				// 密碼
	private String mFirstName;       			// 名
	private String mLastName;					// 姓
	private String mEmail;						// 信箱
	private String mAddress;					// 常用地址
	private java.util.Date mBirthday;			// 生日
	private String mPhone;	     				// 市話電話
	private String mEarning;					// 收入
	private String mBank;						// 收款帳號
	private String mRank;						// 評分等級
	private String mCellphone;					// 手機號碼
	private Blob mPicture;						// 大頭照
	
	public MemberBean() {}

	public MemberBean(Integer mId, String mAccount, String mPassword, String mFirstName, String mLastName,
			String mEmail, String mAddress, Date mBirthday, String mPhone, String mEarning, String mBank, String mRank,
			String mCellphone, Blob mPicture) {
		this.mId = mId;
		this.mAccount = mAccount;
		this.mPassword = mPassword;
		this.mFirstName = mFirstName;
		this.mLastName = mLastName;
		this.mEmail = mEmail;
		this.mAddress = mAddress;
		this.mBirthday = mBirthday;
		this.mPhone = mPhone;
		this.mEarning = mEarning;
		this.mBank = mBank;
		this.mRank = mRank;
		this.mCellphone = mCellphone;
		this.mPicture = mPicture;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public String getmAccount() {
		return mAccount;
	}

	public void setmAccount(String mAccount) {
		this.mAccount = mAccount;
	}

	public String getmPassword() {
		return mPassword;
	}

	public void setmPassword(String mPassword) {
		this.mPassword = mPassword;
	}

	public String getmFirstName() {
		return mFirstName;
	}

	public void setmFirstName(String mFirstName) {
		this.mFirstName = mFirstName;
	}

	public String getmLastName() {
		return mLastName;
	}

	public void setmLastName(String mLastName) {
		this.mLastName = mLastName;
	}

	public String getmEmail() {
		return mEmail;
	}

	public void setmEmail(String mEmail) {
		this.mEmail = mEmail;
	}

	public String getmAddress() {
		return mAddress;
	}

	public void setmAddress(String mAddress) {
		this.mAddress = mAddress;
	}

	public java.util.Date getmBirthday() {
		return mBirthday;
	}

	public void setmBirthday(java.util.Date mBirthday) {
		this.mBirthday = mBirthday;
	}

	public String getmPhone() {
		return mPhone;
	}

	public void setmPhone(String mPhone) {
		this.mPhone = mPhone;
	}

	public String getmEarning() {
		return mEarning;
	}

	public void setmEarning(String mEarning) {
		this.mEarning = mEarning;
	}

	public String getmBank() {
		return mBank;
	}

	public void setmBank(String mBank) {
		this.mBank = mBank;
	}

	public String getmRank() {
		return mRank;
	}

	public void setmRank(String mRank) {
		this.mRank = mRank;
	}

	public String getmCellphone() {
		return mCellphone;
	}

	public void setmCellphone(String mCellphone) {
		this.mCellphone = mCellphone;
	}

	public Blob getmPicture() {
		return mPicture;
	}

	public void setmPicture(Blob mPicture) {
		this.mPicture = mPicture;
	}
	public String toString (){
		return "[" + mId + "," + mAccount + "," + mPassword + "," + mFirstName + "," + mLastName + "," + mEmail + "," + mAddress + "," + mBirthday + "," + mPhone + "," + mBank  + "," + mEarning+ "," + mRank + "," + mCellphone + "," + mPicture + "]";
	}
}
