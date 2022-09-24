package model;

import java.io.Serializable;
import java.sql.Blob;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "member")
public class MemberBean implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "MId")
	private Integer mId;   			    		// ObjectId
	private String mAccount;   					// 帳號
	private String mPassword;   				// 密碼
	private String mFirstName;       			// 名
	private String mLastName;					// 姓
	private String mEmail;						// 信箱
	private String mAddress;					// 常用地址
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date mBirth;				// 生日
	private String mPhone;	     				// 市話電話
	private String mBank;						// 收款帳號
	private String mEarning;					// 收入
	private String mRank;						// 評分等級
	private String mCellphone;					// 手機號碼
	@JsonIgnore
	private Blob mPicture;						// 大頭照
	private String vPref;						// 常用信用卡
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "mId")
	private Set<AddressBean> addressBeans;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "mId")
	private Set<VisaBean> visaBeans;
	
	public MemberBean() {}

	public MemberBean(Integer mId, String mAccount, String mPassword, String mFirstName, String mLastName,
			String mEmail, String mAddress, Date mBirth, String mPhone, String mBank, String mEarning, String mRank,
			String mCellphone, Blob mPicture, String vPref, Set<AddressBean> addressBeans, Set<VisaBean> visaBeans) {
		this.mId = mId;
		this.mAccount = mAccount;
		this.mPassword = mPassword;
		this.mFirstName = mFirstName;
		this.mLastName = mLastName;
		this.mEmail = mEmail;
		this.mAddress = mAddress;
		this.mBirth = mBirth;
		this.mPhone = mPhone;
		this.mBank = mBank;
		this.mEarning = mEarning;
		this.mRank = mRank;
		this.mCellphone = mCellphone;
		this.mPicture = mPicture;
		this.vPref = vPref;
		this.addressBeans = addressBeans;
		this.visaBeans = visaBeans;
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

	public java.util.Date getmBirth() {
		return mBirth;
	}

	public void setmBirth(java.util.Date mBirth) {
		this.mBirth = mBirth;
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

	public String getvPref() {
		return vPref;
	}

	public void setvPref(String vPref) {
		this.vPref = vPref;
	}

	public Set<AddressBean> getAddressBeans() {
		return addressBeans;
	}

	public void setAddressBeans(Set<AddressBean> addressBeans) {
		this.addressBeans = addressBeans;
	}

	public Set<VisaBean> getVisaBeans() {
		return visaBeans;
	}

	public void setVisaBeans(Set<VisaBean> visaBeans) {
		this.visaBeans = visaBeans;
	}

}
