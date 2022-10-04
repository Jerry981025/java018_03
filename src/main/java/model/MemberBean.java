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
	private String mPassword;   				// 密碼
	private String mFirstName;       			// 名
	private String mLastName;					// 姓
	private String mEmail;						// 信箱
	private String mAddress;					// 常用地址
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date mBirth;				// 生日
	private String mPhone;	     				// 市話電話
	private String mBank;						// 收款帳號
	private String mCellphone;					// 手機號碼
	private String mMineType;
	@JsonIgnore
	private Blob mPicture;						// 大頭照
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "mId")
	private Set<AddressBean> addressBeans;
	
	public MemberBean() {}

	public MemberBean(Integer mId, String mPassword, String mFirstName, String mLastName, String mEmail,
			String mAddress, Date mBirth, String mPhone, String mBank, String mCellphone,
			String mMineType, Blob mPicture, Set<AddressBean> addressBeans) {
		this.mId = mId;
		this.mPassword = mPassword;
		this.mFirstName = mFirstName;
		this.mLastName = mLastName;
		this.mEmail = mEmail;
		this.mAddress = mAddress;
		this.mBirth = mBirth;
		this.mPhone = mPhone;
		this.mBank = mBank;
		this.mCellphone = mCellphone;
		this.mMineType = mMineType;
		this.mPicture = mPicture;
		this.addressBeans = addressBeans;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
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

	public String getmBank() {
		return mBank;
	}

	public void setmBank(String mBank) {
		this.mBank = mBank;
	}

	public String getmCellphone() {
		return mCellphone;
	}

	public void setmCellphone(String mCellphone) {
		this.mCellphone = mCellphone;
	}

	public String getmMineType() {
		return mMineType;
	}

	public void setmMineType(String mMineType) {
		this.mMineType = mMineType;
	}

	public Blob getmPicture() {
		return mPicture;
	}

	public void setmPicture(Blob mPicture) {
		this.mPicture = mPicture;
	}

	public Set<AddressBean> getAddressBeans() {
		return addressBeans;
	}

	public void setAddressBeans(Set<AddressBean> addressBeans) {
		this.addressBeans = addressBeans;
	}

}
